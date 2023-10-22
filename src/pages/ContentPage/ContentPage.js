import ContentTab from "../../components/ContentTab/ContentTab";
import './ContentPage.css';

function ContentPage() {
    return (
        <div className="content-page-container">
            <h2>Content</h2>
            <div className="content-tab-container">
                <ContentTab />
            </div>
        </div>
    )
}

export default ContentPage;