const baseUrl = process.env.REACT_APP_BASE_URL
export const url = {
    registerApi :`${baseUrl}/auth/register/`,
    loginApi : `${baseUrl}/auth/login/`,
    updatePasswordApi : `${baseUrl}/user/update-password/`,
    projectGetApi : `${baseUrl}/projects/`,
    projectIndividualDeleteApi : `${baseUrl}/projects/`,
    projectDeleteAllApi : `${baseUrl}/projects/delete-all/`
}