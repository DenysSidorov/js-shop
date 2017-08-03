import React from "react";

class ConfirmBlock extends React.Component {
    render(){
        return (
            <div className="confirmBlockForUser">
                <div className="confirmBlockForUser__content">
        <span className="confirmBlockForUser__content_btn_close">
        <i className="fa fa-times" aria-hidden="true"></i>
        </span>
                    <ul>
                        <li>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet beatae,
                                debitis doloremque dolores ducimus facilis id laboriosam laudantium maiores mollitia, nemo
                                nostrum numquam, quos suscipit vel velit voluptatem.
                            </div>
                            <div>Debitis dolorem odit optio suscipit. Ad animi asperiores assumenda beatae corporis culpa
                                cumque debitis eos explicabo facere inventore laboriosam, maxime nihil quae quasi ratione
                                repellat sint temporibus totam vitae voluptas!
                            </div>
                            <div>Assumenda cupiditate dolores earum eius facere, fugit maiores quasi, qui recusandae
                                reiciendis rem repellendus repudiandae suscipit. Alias amet animi consectetur dignissimos
                                excepturi incidunt ipsam, ipsum modi nulla porro saepe sapiente.
                            </div>
                            <div>Ab asperiores aut cupiditate, ducimus, eos facilis nemo non obcaecati quasi quidem quis
                                tenetur vel, vero. Consequuntur, dolorum incidunt ipsum numquam possimus provident quas.
                                Aspernatur blanditiis ex hic labore omnis!
                            </div>
                        </li>
                    </ul>
                    <div className="confirmBlockForUser__content_btn">
                        <span className="confirmBlockForUser__content_btn_ok">Ок</span>
                        <span className="confirmBlockForUser__content_btn_cancel">Отмена</span>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ConfirmBlock;