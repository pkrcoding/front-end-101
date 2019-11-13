import React from 'react';
import {connect} from 'react-redux';
const Message = ({message}) => {
    return (
        <div className="message">{message}</div>
    );
}
const mapStateToProps = (state) => ({
    message: state.message
});
export default connect(mapStateToProps)(Message);

