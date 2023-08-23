import React from "react";
// TODO establish file later
// import profileImage from "";

function about() {
    return (
        <section id='about me' className= "my-5 intro">
            <div class='flex row'>
                <h1 id="about"  className="section-title primary-border">
                ABout me
                </h1>
            </div>
            <div className="flex - row">
                <div class="intro-info">
                    <div class="intro-img">
                        {/* <img src={profileImage} alt="<NAME>" /> */}
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem, vel numquam quo sint autem eius dicta fugit impedit pariatur recusandae corporis assumenda architecto odio aperiam ipsum voluptatem rem atque.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem, vel numquam quo sint autem eius dicta fugit impedit pariatur recusandae corporis assumenda architecto odio aperiam ipsum voluptatem rem atque.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem, vel numquam quo sint autem eius dicta fugit impedit pariatur recusandae corporis assumenda architecto odio aperiam ipsum voluptatem rem atque.</p>
                </div>
            </div>
        </section>
    );
    
}
export default about;