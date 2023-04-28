import './Profile.css'

export default function Profile() {
    return (
        <section className="profile-page">
            <div className="user">
                <div className="user-avatar">
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>

                    <h1> Username </h1>
                </div>

                <div className="user-data">
                    <div className="field-user">
                        <input type="text" name="" id="" value="Owen Marscel" disabled={true}/>
                    </div>

                    <div className="field-user">
                        <input type="text" name="" id="" value="owenmarscel@gmail.com" disabled={true}/>
                    </div>

                    <div className="field-user">
                        <input type="text" name="" id="" value="19" disabled={true}/>
                    </div>

                    <div className="field-user">
                        <input type="text" name="" id="" value="0897-3353-739" disabled={true}/>
                    </div>
                </div>
            </div>

            <div className="janji-user">
                <div className="judul-janji">
                    <h1> List Janji </h1>
                </div>

                <div className="janji-grid">
                    <div className="janji-cards">
                        <div className='janji-image'>
                            <img src="/media/dr.jpg" alt="" />
                        </div>
                        
                        <div className='janji-info'>
                            <h1> Nama User </h1>
                            <p> Hari, xx xx 2023 </p>
                            <h4> Jam </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}