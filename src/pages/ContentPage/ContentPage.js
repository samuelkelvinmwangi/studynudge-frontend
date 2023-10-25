import Content from "../../components/Content/Content";
import './ContentPage.css';

function ContentPage() {
    return (
        <div className="content-page-container">
            <h2 className="page-title">Content</h2>
            <div className="content-tab-container">
                <Content />
            </div>
        </div>
    )
}

export default ContentPage;