import React, {Fragment, Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { getTableInformation } from "../services/star-wars-service";
import 'bootstrap/scss/bootstrap.scss';

class InfoTable extends Component {
        constructor(props){
            super(props);

            this.state = {
                info: []
            };
        }

        render() {
            
          const { info } = this.state;
          const filterText = this.props.filterText;
          const names = [];
          const shipClasses = [];

           info.forEach((sh) => {
               if(sh.name.indexOf(filterText) === -1 ){
                   return;
               }
               names.push(sh);
           });

           return (  
               <MDBContainer>
                   <MDBTable hover>
                       <MDBTableHead className="primary-color">
                           <tr>
                               <th>#</th>
                               <th>Spaceship Name</th>
                               <th>Starship Class</th>
                           </tr>
                       </MDBTableHead>
                       <MDBTableBody>
                           {names.map(function(x) {
                               return <tr>
                                   <td>{names.indexOf(x) + 1}</td>
                                   <td>{x.name}</td>
                                   <td>{x.starship_class}</td>
                               </tr>
                           })}
                       </MDBTableBody>
                   </MDBTable>
               </MDBContainer>        
           )
    }

    componentDidMount() {
        getTableInformation()
            .then((info) => {
                this.setState({info : info})
            });
    }
}

export default InfoTable;