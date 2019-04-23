import React, { Component } from 'react';
import { MDBContainer, MDBTable, MDBTableBody,
     MDBTableHead } from 'mdbreact';
import { getTableInformation } from "../services/star-wars-service";
import 'bootstrap/scss/bootstrap.scss';
import axios from 'axios';

class InfoTable extends Component {
        constructor(props){
            super(props);

            this.state = {
                info: [],
                currentPage: this.props.page,
            };

            this.setNextPage = this.setNextPage.bind(this);
            this.setPreviousPage = this.setPreviousPage.bind(this);
            this.updatePage = this.updatePage.bind(this);
        }


        setNextPage = () => {
            if(this.state.info.length >= 10){
                this.setState( {
                    currentPage: this.state.currentPage + 1,
                });
            }
        }

        setPreviousPage = () => {
            if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1,
            })};
        }

        updatePage = (x) => {
            getTableInformation(x)
            .then((info) => {
                this.setState({info : info})
            });
        }

        render() {
          const filterText = this.props.filterText;
          const ships = [];

           this.state.info.forEach((sh) => {
               if(sh.name.indexOf(filterText) === -1 ){
                   return;
               }
               ships.push(sh);
           });
           

           return (   
               <MDBContainer>
                   <MDBTable hover>
                       <MDBTableHead>
                           <tr>
                               <th>#</th>
                               <th>Spaceship Name</th>
                               <th>Starship Class</th>
                           </tr>
                       </MDBTableHead>
                       <MDBTableBody>
                           {ships.map(x => {
                               return <tr>
                                   <td>{ships.indexOf(x) + 1}</td>
                                   <td>{x.name}</td>
                                   <td>{x.starship_class}</td>
                               </tr>
                           })}
                       </MDBTableBody>
                   </MDBTable>      
                   <button  onClick={this.setPreviousPage} className="float-left">previous page</button>
                   <button  onClick={this.setNextPage} className="float-right">next page</button>
               </MDBContainer>        
           )
    }

    componentDidMount() {
        const p = this.state.currentPage;

        this.updatePage(p);

        //axios.get('http://localhost:60231/api/values');
    }

    componentDidUpdate(prevProps, prevState){
        const current = this.state.currentPage;
        const lastPage = prevProps.page;
        
        if (current !== lastPage) {
            this.updatePage(current);            
        }
        else
        {
            this.updatePage(lastPage);
        }
    }
}

export default InfoTable;