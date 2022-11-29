import React from 'react';
import {Profile} from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {ProfileType} from "../../redax/profile-reduser";


export type mapStateToPropsType = {
    profile: any
}

export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }

};
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {})(ProfileContainer)