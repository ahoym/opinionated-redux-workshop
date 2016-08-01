import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import PostFeed from 'components/PostFeed'
import { fetchCreatorPostFeed } from '../actions/creator-post-feed';

//
// propTypes: {
//     posts: PropTypes.array,
//     onMount: PropTypes.func
// },

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.postFeed.entities
    }
}

const mapDispatchToProps = (dispatch) => {
    // Can import these as well.
    const actions = {
      fetchCreatorPostFeed: fetchCreatorPostFeed
    };

    const boundActionCreators = bindActionCreators(actions, dispatch);

    return {
        onMount: (creatorId) => {
            return boundActionCreators.fetchCreatorPostFeed(creatorId);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
