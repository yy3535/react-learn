import React from 'react';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import './App.css';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments:['this is my first reply']
        }
        this.addComment=this.addComment.bind(this)
        this.deleteComment=this.deleteComment.bind(this)
    }
    addComment(comment){
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    deleteComment(index){
        this.state.comments.splice(index,1);
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        const {comments}=this.state;
        return (
            <div className="App">
                <CommentList 
                    comments={comments}
                    onDeleteComment={this.deleteComment}
                />
                <CommentBox commentsLength={comments.length} 
                    onAddComment={this.addComment}
                    
                />
            </div>
        );
    }
}

export default App;
