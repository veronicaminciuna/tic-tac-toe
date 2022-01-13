const Header = (props) => {
    return (
        <header className='container'>
            <h1>{props.title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
