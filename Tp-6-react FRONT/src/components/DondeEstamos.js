import React, {Component} from 'react';
import Navigation from './Navigation';


class DondeEstamos extends Component{
      

    render(){
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <map  style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4482396834183!2d-68.84046638421512!3d-32.88631517616794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20Las%20Heras%20%26%20Av.%20San%20Mart%C3%ADn%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1619380383603!5m2!1ses-419!2sar" width="1800" height="600" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </map>
            </React.Fragment>
        );

    }
}

export default DondeEstamos;