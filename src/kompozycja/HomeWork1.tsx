import { Modal } from "./homework1/Modal";
import { ButtonSuccess } from "./homework1/ButtonSucces";
import { ButtonDanger } from "./homework1/ButtonDanger";

export const Homework1 = () => {
    
    return (
    
        <>
        <Modal
        title="Potwierdź"
        text="Czy na pewno chcesz to wykonać?"
        controls={<ButtonSuccess  label="tak"/>}
         >

        </Modal>

        <Modal
        title="Potwierdź"
        text="Czy na pewno chcesz to wykonać?"
        controls = {<ButtonDanger label="nie" />}>      

        </Modal>
        </>
    );
};
