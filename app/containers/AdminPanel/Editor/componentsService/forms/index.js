
// import React, { Component } from 'react';
// import { RaisedButton } from 'material-ui';
// import { FieldArray } from 'redux-form';
// import styled from 'styled-components';
// import PeopleInput from './QuoteInput';


// const AddButton = styled(RaisedButton)`
//   margin: 0 50%;
// `;

// const renderPeopleFields = ({ fields }) => (
//   <div>
//     { fields.map(PeopleInput) }
//     <AddButton
//       onClick={() => fields.push({
//         type: 'quote',
//       })}
//     >Добавить</AddButton>
//   </div>
//   );

// renderPeopleFields.propTypes = {
//   fields: React.PropTypes.object,
// };

// const PeopleSection = ({ name }) => (
//   <div>
//     <FieldArray name={name} component={renderPeopleFields}></FieldArray>
//   </div>
// );

// PeopleSection.propTypes = {
//   name: React.PropTypes.string.isRequired,
// };

// const mapFormsTypes = {
//   quote: PeopleInput,
// };

// class ContentService extends Component {

//   constructor(props) {
//     super(props);
//     this.state({
//       fields: [],
//     });
//   }

//   addForm() {
//     this.this.setState({
//       fields: this.state.fields.concat({ type: 'quote' }),
//     });
//   }

//   render() {
//     return (
//       <div>
//         { this.state.fields.map(({ type }) => {

//         })}
//         <AddButton
//           onClick={this.addForm}
//         >Добавить</AddButton>
//       </div>
//     );
//   }
// }

// export default PeopleSection;


// export { default as Quote } from './QuoteInput';
