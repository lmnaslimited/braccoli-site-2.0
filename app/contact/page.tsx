import { getData } from "../api/getData";
import ContactChildPage from "./contact"
import { Tcontact } from "@repo/ui/type";

export default async function ContactPage() {
    const idContact = await getData<Tcontact>("contact")
    return (
        <ContactChildPage idContact={idContact} />
    )

}