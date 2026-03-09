import type { TredisLike, TcacheValue } from "@repo/middleware/types"

const LMemoryCache = new Map<string, TcacheValue>()

async function fnLoadIoRedis(): Promise<{
  default: new (url: string) => TredisLike
} | null> {
  try {
    const dynamicImport = new Function("m", "return import(m)") as (
      moduleName: string,
    ) => Promise<{ default: new (url: string) => TredisLike }>

    return await dynamicImport("ioredis")
  } catch {
    return null
  }
}

async function fnCreateRedisClient(): Promise<TredisLike | null> {
  const redisModule = await fnLoadIoRedis()
  if (!redisModule) {
    return null
  }

  const redisUrl = process.env.REDIS_URL
  if (!redisUrl) {
    return null
  }

  const Redis = redisModule.default
  return new Redis(redisUrl)
}

let clientPromise: Promise<TredisLike | null> | null = null

export async function fnGetRedisClient() {
  if (!clientPromise) {
    clientPromise = fnCreateRedisClient()
  }
  return clientPromise
}

export async function fnCacheGet(key: string): Promise<string | null> {
  const redis = await fnGetRedisClient()
  if (redis) {
    return redis.get(key)
  }

  const item = LMemoryCache.get(key)
  if (!item || Date.now() > item.expiresAt) {
    LMemoryCache.delete(key)
    return null
  }
  return item.value
}

export async function fnCacheSet(
  key: string,
  value: string,
  ttlSeconds: number,
): Promise<void> {
  const redis = await fnGetRedisClient()
  if (redis) {
    await redis.set(key, value, "EX", ttlSeconds)
    return
  }

  LMemoryCache.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 })
}
