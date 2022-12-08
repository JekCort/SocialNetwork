import React from 'react';
import {Profile} from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {initialStateType, ProfileType, setUserProfile} from "../../redax/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";



export type mapStateToPropsType = {
    profile: ProfileType
}

export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


 type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type pathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<pathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {
        debugger
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
    profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)