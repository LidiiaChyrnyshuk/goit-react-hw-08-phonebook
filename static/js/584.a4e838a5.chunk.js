"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{6584:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(9434),r=n(2791),s="ContactsPage_container__idZzt",c=n(9439),o="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",l="ContactForm_input__Bl93P",u="ContactForm_btn__wll+u",m=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=function(e){return e.filter.filter},p=n(208),_=n(184),b=function(){var e=(0,r.useState)(""),t=(0,c.Z)(e,2),n=t[0],s=t[1],d=(0,r.useState)(""),h=(0,c.Z)(d,2),f=h[0],b=h[1],x=(0,a.v9)(m),C=(0,a.I0)(),j=function(e){var t=e.target,n=t.value,a=t.name;"name"===a?s(n):"number"===a&&b(n)};return(0,_.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=x.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=x.find((function(e){return e.number===f}));if(t)return alert('Contact "'.concat(n,'" is already in contacts list'));if(a)return alert('Number "'.concat(f,'" is already in contacts list'));var r={name:n,number:f};C((0,p.uK)(r)),s(""),b("")},className:o,children:[(0,_.jsxs)("label",{htmlFor:"name",className:i,children:["Name",(0,_.jsx)("input",{className:l,type:"text",name:"name",value:n,onChange:j,placeholder:"Rosie Simpson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{htmlFor:"number",className:i,children:["Number",(0,_.jsx)("input",{className:l,type:"tel",name:"number",value:f,onChange:j,placeholder:"+380556688995",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{type:"submit",className:u,children:"Add contact"})]})},x=n(6895),C=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,_.jsxs)("label",{htmlFor:"filter",className:i,children:["Find contacts by name",(0,_.jsx)("input",{className:l,type:"text",name:"filter",title:"Please enter a name to find your contacts",value:e,onChange:function(e){return t((0,x.x)(e.target.value))}})]})},j="ContactsList_contactList__qIIH9",v="ContactsList_item__6gc1x",N="ContactsList_itemName__i2UjD",y="ContactsList_btnDelete__bDwNP",g=function(){var e=(0,a.v9)(m),t=(0,a.v9)(f),n=(0,a.I0)(),r=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,_.jsx)("ul",{className:j,children:r.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,_.jsxs)("li",{id:t,className:v,children:[(0,_.jsxs)("p",{className:N,children:[a,":",(0,_.jsx)("span",{children:r})]}),(0,_.jsx)("button",{className:y,type:"button",onClick:function(){return n((0,p.GK)(t))},children:"Delete"})]},t)}))})},w=n(7204);function F(){var e=(0,a.I0)(),t=(0,a.v9)(m),n=(0,a.v9)(d),c=(0,a.v9)(h);return(0,r.useEffect)((function(){e((0,p.yF)())}),[e]),(0,_.jsxs)("div",{className:s,children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(b,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(C,{}),n&&(0,_.jsx)(w.a,{}),c&&(0,_.jsxs)("p",{children:["Sorry. ",c]}),0===t.length&&(0,_.jsx)("p",{children:"Sorry, there is no contacts yet"}),(0,_.jsx)(g,{})]})}}}]);
//# sourceMappingURL=584.a4e838a5.chunk.js.map