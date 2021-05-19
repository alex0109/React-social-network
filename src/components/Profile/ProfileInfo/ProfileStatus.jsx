import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
       this.setState({
         status: e.currentTarget.value
       });
    }

  render() {
    return (
      <>
        { !this.state.editMode &&
            <p onDoubleClick={ this.activateEditMode }>{this.props.status || <p>Your status...</p>}</p>
        }
        {this.state.editMode &&
            <input type="text" value={this.state.status} onBlur={this.deactivateMode} autoFocus={true} onChange={this.onStatusChange}/>
        }
      </>
    );
  }
}

export default ProfileStatus;
