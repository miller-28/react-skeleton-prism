export default function SideMenuButton({buttonName, buttonActive = false}) {
    return <button className={buttonActive ? 'active' : ''}>{buttonName}</button>;
}