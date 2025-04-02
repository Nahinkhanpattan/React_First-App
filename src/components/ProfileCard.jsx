import { useState } from "react"
import defimg from "../assets/react.svg"
import "../component-styles/ProfileCard.css"
export default function ProfileCard() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({ name: "", email: "", img: "" })

    function handleSubmit(e) {
        e.preventDefault()
        setUsers([...users, user])
        setUser({ name: "", email: "", img: "" })
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleFileChange(e) {
        const file = e.target.files[0]
        if (file) {
            setUser({ ...user, img: URL.createObjectURL(file) })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                />
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>

            <div className="profile">
                {users.map((user, index) => (
                    <div className="profileCard" key={index}>
                        <div className="imgcard">
                            {user.img ? (
                                <img src={user.img} alt="Profile" />
                            ) : (
                                <img src={`/React_First-App/vite.svg`} alt="Default Profile" />
                            )}
                        </div>
                        <div className="name">
                            <h1>{user.name}</h1>
                        </div>
                        <div className="email">
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
