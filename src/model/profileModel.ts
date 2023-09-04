export interface Profile {
    address?: string; // Company profile only
    contact?: string;
    date_of_birth?: string;
    email?: string;
    email_verification_flag?: boolean;
    gmap?: string; // Company profile only
    id?: string;
    intro?: string;
    name?: string;
    profile_pic?: string;
    user_id?: string;
    user_type?: string;
    username?: string;
    mobile_no?: string;
}

export default Profile;