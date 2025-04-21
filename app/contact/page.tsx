import ContactChildPage from "./contact"
import { Tcontact } from "@repo/ui/type";
import { fnGetData } from "../api/getData";

export default async function ContactPage() {
    const idContact = await fnGetData<Tcontact>("contact")
    return (
        <ContactChildPage idContact={idContact} />
    )

}
