import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
    }

    deactivateMode() {
        this.setState({
            editMode: false
        });
    }

  render() {
    return (
      <>
        { !this.state.editMode &&
            <p onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</p>
        }
        {this.state.editMode &&
            <input type="text" value={this.props.status} onBlur={this.deactivateMode.bind(this)} autoFocus={true}/>
        }
      </>
    );
  }
}

export default ProfileStatus;
