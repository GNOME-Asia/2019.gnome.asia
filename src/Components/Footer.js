import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className="container py-3">
                <div className="row justify-contents-bottom align-content-bottom">
                    <div className="col-md-8 col-12">
                        <h6 style={{ fontWeight:'600' }}>GNOME Event Code of Conduct</h6>
                        <div>The GNOME Events Code of Conduct applies to all GNOME events, including hackfests, release parties, workshops and other small events. Each GNOME conference should have a tailored version of this Code of Conduct, which contains additional details about how to report incidents and get support. <br/><a href="https://wiki.gnome.org/CodeOfConduct/Events">See Details...</a></div>
                    </div>
                    <div className="col-md-4 col-12 text-left text-md-right mt-md-0 mt-3">
                        <h6 style={{ fontWeight:'600' }}>Contact Us</h6>
                        <div><i className="d-inline d-md-none mr-2 mr-md-0 fab fa-twitter"></i>@gnome_asia<i className="d-none d-md-inline ml-0 ml-md-2 fab fa-twitter"></i></div>
                        <div className="mt-0 mt-md-2"><i className="d-inline d-md-none mr-2 mr-md-0 fas fa-envelope-open-text"></i>humas@gnome.id<i className="d-none d-md-inline ml-0 ml-md-2 fas fa-envelope-open-text"></i></div>
                    </div>
                </div>
                <hr />
                <div className="text-center">Copyright © 2019 GNOME.Asia Summit</div>
            </div>
        )
    }
}

export default Footer;