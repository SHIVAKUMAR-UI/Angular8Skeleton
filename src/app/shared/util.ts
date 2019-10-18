export let companyURL;
export let adminLogin;
export function getBaseOrganizationLocation() {
    // Assuming path does not have any sub domain
    const paths: string[] = location.pathname.split('/').splice(2, 1);
    let basePath: string = (paths && paths[0]);
    // basePath = (environment.isProdHostName) ? redirection(window.location.hostname) : basePath;
    let companyFound = false;
    const companies = _companies.map(
        (company) => {
            if (basePath.toLowerCase() === company.url) {
                companyURL = company.url;
                companyFound = true;
            }
            return companies;
        }
    );

    if (basePath === 'admin') {
        adminLogin = true;
    }

    if (!companyFound) {
        companyURL = null;
    }

    if (companyURL) {
        if (basePath === '' || basePath.startsWith('#')) {
            basePath = companyURL;
        }

        return '/' + basePath;

    }
    return '';
}



export const _companies =
    [
        {
            id: 1,
            name: 'SCHOOL',
            url: 'school',
            cssClass: 'school',
            logo: 'school.png',
            loginLogo: 'login.png'
        }
    ];
