import ContentCard from '../ContentCard/ContentCard';
import { useParams, useLocation } from "react-router-dom";

function ContentView() {
    
  const { id } = useParams();
  const location = useLocation();

    return (
        <>
            {
                location.state ? (
                    <ContentCard title={location.state.title} url={location.state.url} username={location.state.username} created_at={location.state.created_at} content={location.state.content} content_type={location.state.content_type}/>
                ) : (
                    <h1>Content View { id }</h1>
                )
            }
            
        </>
    );
}

export default ContentView;