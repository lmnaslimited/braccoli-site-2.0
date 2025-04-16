import { fnGetData } from "../api/getData";
import ContactChildPage from "./contact"
import { Tcontact } from "@repo/ui/type";

export default async function ContactPage() {
    const idContact = await fnGetData<Tcontact>("contact", "en")
    console.log(idContact)
    return (
        <ContactChildPage idContact={idContact} />
    )

}
