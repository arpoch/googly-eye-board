import './Title.css'
function Title() {
    return (
        <div className="header">
            <div className="title">
                Googly Eyed
            </div>
            <div className="word">
                <input className="box" placeholder=".   .   ." />
            </div>
        </div>
    );
}

export default Title;