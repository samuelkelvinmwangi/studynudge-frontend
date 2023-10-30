import ContentCard from '../ContentCard/ContentCard';
import { useParams, useLocation } from "react-router-dom";
import NavigationBar from '../../components/NavigationBar';

function ContentView() {
    
  const { id } = useParams();
  const location = useLocation();

    return (
        <>
            <NavigationBar />
            {
                location.state ? (
                    <>
                        <ContentCard id={location.state.id} title={location.state.title} mediaUrl={location.state.mediaUrl} thumbnailUrl={location.state.thumbnailUrl} username={location.state.username} created_at={location.state.created_at} content={location.state.content} content_type={location.state.content_type} userRole={location.state.userRole} />
                        <div>
                            <p>{ location.state.content }</p>
                        </div>
                    </>
                ) : (
                    <h1>Content View { id }</h1>
                )
            }
            
        </>
    );
}

export default ContentView;