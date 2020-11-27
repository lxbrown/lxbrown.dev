import profile from '../assets/images/profile.jpg';

import './home.css';

export default function Home() {
    return (
        <div className="home">
            <img src={profile} alt="Profile" className="photo"/>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis aliquam dui in pellentesque. Pellentesque vel euismod eros, ut imperdiet est. Integer eros purus, sollicitudin eu gravida in, suscipit vehicula neque. In ut tincidunt dolor. Fusce vel massa quis massa imperdiet facilisis. Sed molestie porttitor mi, et condimentum nisl tempor sit amet. Sed quis sollicitudin mauris.</p>
        </div>
    )
}