(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),i=(n(13),n(3)),s=n.n(i),u=n(4),l=n(2),p=r.a.createContext(),d=n.p+"static/media/logo.c7581985.svg",_=n(0);var m=function(){return Object(_.jsx)("header",{className:"header",children:Object(_.jsx)("img",{src:d,alt:"header-logo",className:"header__logo"})})};var b=function(e){var t=e.cardClickHandler,n=e.onCardDelete,a=e.card,o=e.onCardLike,c=r.a.useContext(p),i=a.owner._id===c._id,s="elements__delete-button ".concat(i?"elements__delete-button_active":"elements__delete-button_hidden"),u=a.likes.some((function(e){return e._id===c._id})),l="elements__like-button ".concat(u?"elements__like-button_active":"elements__like-button_hidden");return Object(_.jsxs)("li",{className:"elements__card",children:[i&&Object(_.jsx)("button",{type:"button",onClick:function(){return n(a)},className:"".concat(s),"aria-label":"delete button"}),Object(_.jsx)("div",{className:"elements__pic",onClick:function(){return t(a)},style:{backgroundImage:"url(".concat(a.link,")")},alt:a.name}),Object(_.jsxs)("div",{className:"elements__inner-container",children:[Object(_.jsx)("h2",{className:"elements__title",children:a.name}),Object(_.jsxs)("div",{className:"elements__likes-container",children:[Object(_.jsx)("button",{onClick:function(){return o(a)},type:"button",className:"".concat(l),"aria-label":"like button"}),Object(_.jsx)("p",{className:"element__like-counter",children:a.likes.length})]})]})]})};var f=function(e){var t=e.onEditAvatarClick,n=e.onEditProfileClick,a=e.onAddPlaceClick,o=e.onDeleteImagePopupOpen,c=e.cardClickHandler,i=e.cards,s=e.onCardLike,u=r.a.useContext(p);return Object(_.jsxs)("main",{className:"content",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsxs)("div",{className:"avatar",children:[Object(_.jsx)("div",{className:"avatar__image",style:{backgroundImage:"url(".concat(u.avatar,")")}}),Object(_.jsx)("button",{onClick:t,type:"button",className:"avatar__edit"})]}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsx)("h1",{className:"profile__full-name",children:u.name}),Object(_.jsx)("p",{className:"profile__career",children:u.about}),Object(_.jsx)("button",{onClick:n,type:"button",className:"profile__button",id:"editButton"})]}),Object(_.jsx)("button",{onClick:a,type:"button",className:"profile__rectangle",id:"addPhoto"})]}),Object(_.jsx)("section",{className:"elements",children:Object(_.jsx)("ul",{className:"elements__container",children:i.map((function(e){return Object(_.jsx)(b,{onCardDelete:o,onCardLike:s,card:e,cardClickHandler:c,onDeleteImagePopupOpen:o},e._id)}))})})]})},h=n(5),j=n(6),v=function(){function e(t,n){var a=this;Object(h.a)(this,e),this._showInputError=function(e,t){var n=a._config,r=n.errorClass,o=n.errorInputSelector,c=a._formElement.querySelector(".".concat(e.id,"-error"));c.textContent=t,c.classList.add(r),e.classList.add(o)},this._hideInputError=function(e){var t=a._config,n=(t.inputErrorClass,t.errorClass),r=t.errorInputSelector,o=a._formElement.querySelector(".".concat(e.id,"-error"));o.classList.remove(n),e.classList.remove(r),o.textContent=""},this._checkInputValidity=function(e){e.validity.valid?a._hideInputError(e):a._showInputError(e,e.validationMessage)},this._hasInvalidInput=function(){return a._inputList.some((function(e){return!e.validity.valid}))},this._toggleButtonState=function(){var e=a._config,t=e.inactiveButtonClass,n=e.submitButtonSelector;a._buttonElement=a._formElement.querySelector(n),a._hasInvalidInput()?(a._buttonElement.disabled=!0,a._buttonElement.classList.add(t)):(a._buttonElement.classList.remove(t),a._buttonElement.disabled=!1)},this._setEventListeners=function(){var e=a._config.inputSelector;a._inputList=Array.from(a._formElement.querySelectorAll(e)),a._toggleButtonState(),a._inputList.forEach((function(e){e.addEventListener("input",(function(){a._checkInputValidity(e),a._toggleButtonState()}))}))},this.resetValidation=function(){Array.from(a._inputList);a._toggleButtonState(),a._inputList.forEach((function(e){a._hideInputError(e)}))},this._config=t,this._formElement=n}return Object(j.a)(e,[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}]),e}(),O={formSelector:".popup",inputSelectorSet:".popup__set",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__item-error",errorClass:"popup__item-error_active",errorInputSelector:"popup__item_theme_red",imageModalWindow:".popup_theme_open-photo",editModalWindow:".popup_theme_edit",addPhotoModalWindow:".popup_theme_add-photo",editAvatarModalWindow:".popup_theme_edit-avatar",deleteCardModalWindow:".popup_theme_delete-photo",elementsContainer:".elements__container"};var x=function(e){var t=e.name,n=e.isOpen,a=e.onClose,o=e.title,c=e.btnSubmitTitle,i=e.children,s=e.validate,u=e.onSubmit,p=r.a.useState(),d=Object(l.a)(p,2),m=d[0],b=d[1],f=r.a.useRef(),h=r.a.useRef();return r.a.useEffect((function(){if(s){var e=new v(O,f.current);e.enableValidation(),b(e)}}),[s]),r.a.useEffect((function(){m&&n&&m.resetValidation()}),[n,m]),Object(_.jsx)("div",{className:"popup popup_theme_".concat(t," ").concat(n&&"popup_open"),children:Object(_.jsxs)("div",{className:"popup__container popup__container_theme_edit",children:[Object(_.jsx)("button",{type:"button",className:"popup__close-button",onClick:a,"aria-label":"close button"}),Object(_.jsx)("form",{className:"popup__input-container",name:"form",ref:f,onSubmit:function(e){e.preventDefault(),u(e)},children:Object(_.jsxs)("fieldset",{className:"popup__set",children:[Object(_.jsx)("h2",{className:"popup__header",children:o}),i,Object(_.jsx)("button",{ref:h,className:"popup__submit-button ".concat("Yes"!==c?"popup__submit-button_disabled":""),type:"submit","aria-label":"sumbit button",children:c})]})})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.updateCurrentUser,o=r.a.useState(""),c=Object(l.a)(o,2),i=c[0],s=c[1],u=r.a.useState(""),d=Object(l.a)(u,2),m=d[0],b=d[1],f=r.a.useContext(p);return r.a.useEffect((function(){s(f.name),b(f.about)}),[f,t]),Object(_.jsxs)(x,{name:"edit",title:"Edit Profile",btnSubmitTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:m})},validate:!0,children:[Object(_.jsxs)("label",{className:"popup__field",children:[Object(_.jsx)("input",{placeholder:"Name",id:"name-input",className:"popup__item popup__item_type_name",name:"fullName",value:i||"",type:"text",required:!0,minLength:"2",maxLength:"40",onChange:function(e){return s(e.target.value)}}),Object(_.jsx)("span",{className:"popup__item-error name-input-error"})]}),Object(_.jsxs)("label",{className:"popup__field",children:[Object(_.jsx)("input",{placeholder:"About Me",id:"about-input",className:"popup__item popup__item_type_career",name:"career",value:m||"",type:"text",required:!0,minLength:"2",maxLength:"200",onChange:function(e){return b(e.target.value)}}),Object(_.jsx)("span",{className:"popup__item-error about-input-error"})]})]})};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=r.a.useContext(p),c=r.a.useRef();return r.a.useEffect((function(){t&&(c.current.value=o.avatar)}),[o,t]),Object(_.jsx)(x,{name:"edit-avatar",title:"Change profile picture",btnSubmitTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},validate:!0,children:Object(_.jsxs)("label",{className:"popup__field",children:[Object(_.jsx)("input",{ref:c,placeholder:"Image link",id:"avatar-input",className:"popup__item popup__item_type_avatar",name:"image",type:"url",required:!0}),Object(_.jsx)("span",{className:"popup__item-error avatar-input-error"})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.addNewPhoto,o=r.a.useState(""),c=Object(l.a)(o,2),i=c[0],s=c[1],u=r.a.useState(""),p=Object(l.a)(u,2),d=p[0],m=p[1];return r.a.useEffect((function(){t&&(s(""),m(""))}),[t]),Object(_.jsxs)(x,{name:"add-photo",title:"New place",btnSubmitTitle:"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,link:d})},validate:!0,children:[Object(_.jsxs)("label",{className:"popup__field",children:[Object(_.jsx)("input",{placeholder:"Title",id:"title-input",value:i,className:"popup__item popup__item_type_photo-title",name:"title",type:"text",minLength:"1",maxLength:"30",onChange:function(e){return s(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__item-error title-input-error"})]}),Object(_.jsxs)("label",{className:"popup__field",children:[Object(_.jsx)("input",{placeholder:"Image link",id:"url-input",value:d,className:"popup__item popup__item_type_url",name:"link",type:"url",onChange:function(e){return m(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__item-error url-input-error"})]})]})};var k=function(e){var t=e.onClose,n=e.isOpen,a=e.cardObj;return Object(_.jsx)("div",{className:"popup popup_theme_open-photo ".concat(n&&"popup_open"),children:Object(_.jsxs)("div",{className:"popup__container popup__container_theme_open-photo",children:[Object(_.jsx)("button",{type:"button",className:"popup__close-button",onClick:t,"aria-label":"close button"}),Object(_.jsxs)("figure",{children:[Object(_.jsx)("img",{className:"popup__open-image",alt:a?a.name:null,src:a.link}),Object(_.jsx)("figcaption",{className:"popup__open-image-caption",children:a.name})]})]})})};var S=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__copyrights",children:"\xa9 2021 Idan Porat"})})},y=function(){function e(t){var n=this,a=t.baseURL,r=t.headers;Object(h.a)(this,e),this.getInitialCards=function(){return fetch("".concat(n._baseURL,"/cards"),{headers:n._headers}).then((function(e){return n._getResponseData(e)}))},this.getUserInfo=function(){return fetch("".concat(n._baseURL,"/users/me"),{headers:n._headers}).then((function(e){return n._getResponseData(e)}))},this.createNewCard=function(e){return fetch("".concat(n._baseURL,"/cards"),{headers:n._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return n._getResponseData(e)}))},this.deleteCard=function(e){return fetch("".concat(n._baseURL,"/cards/").concat(e),{headers:n._headers,method:"DELETE"}).then((function(e){return n._getResponseData(e)}))},this.setUserInfo=function(e){var t=e.name,a=e.about;return fetch("".concat(n._baseURL,"/users/me"),{headers:n._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then((function(e){return n._getResponseData(e)}))},this.setUserImage=function(e){return fetch("".concat(n._baseURL,"/users/me/avatar"),{headers:n._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return n._getResponseData(e)}))},this.likeCard=function(e){return fetch("".concat(n._baseURL,"/cards/likes/").concat(e),{headers:n._headers,method:"PUT"}).then((function(e){return n._getResponseData(e)}))},this.unLikeCard=function(e){return fetch("".concat(n._baseURL,"/cards/likes/").concat(e),{headers:n._headers,method:"DELETE"}).then((function(e){return n._getResponseData(e)}))},this._baseURL=a,this._headers=r}return Object(j.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}}]),e}(),E=new y({baseURL:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"001651b9-e63d-4f3d-8d65-ab968b3111ee","Content-Type":"application/json"}});var L=function(e){var t=e.isOpen,n=e.onClose,a=e.deleteCard;return Object(_.jsx)(x,{name:"delete-photo",title:"Are you sure?",btnSubmitTitle:"Yes",isOpen:t,onClose:n,onSubmit:function(){return a()},validate:!1})};var I=function(){var e=r.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.a.useState({}),c=Object(l.a)(o,2),i=c[0],d=c[1],b=r.a.useState(!1),h=Object(l.a)(b,2),j=h[0],v=h[1],O=r.a.useState(!1),x=Object(l.a)(O,2),y=x[0],I=x[1],w=r.a.useState(!1),P=Object(l.a)(w,2),D=P[0],R=P[1],U=r.a.useState(!1),A=Object(l.a)(U,2),T=A[0],B=A[1],q=r.a.useState({}),M=Object(l.a)(q,2),H=M[0],V=M[1],J=r.a.useState(!1),W=Object(l.a)(J,2),F=W[0],Y=W[1];r.a.useEffect((function(){E.getInitialCards().then((function(e){a(e)})).catch((function(e){return console.log(e)}))}),[]);var z=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getUserInfo();case 3:(t=e.sent)&&d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){z()}),[]);var G=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H._id,e.prev=1,e.next=4,E.deleteCard(t);case 4:a(n.filter((function(e){return e._id!==t}))),K(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),K=function(){v(!1),I(!1),R(!1),Y(!1),B(!1)},Q=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",E.setUserInfo(t).then((function(e){d(e),K()})));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.setUserImage(t.avatar).then((function(e){d(e),K()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.createNewCard(t).then((function(e){a((function(t){return[e].concat(t)})),K()}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(p.Provider,{value:i,children:Object(_.jsxs)("div",{className:"root__wrapper",children:[Object(_.jsx)(m,{}),Object(_.jsx)(f,{onEditProfileClick:function(){v(!j)},onAddPlaceClick:function(){I(!y)},onEditAvatarClick:function(){R(!D)},onCloseAllPopups:K,cardClickHandler:function(e){V(e),B(!0)},onDeleteImagePopupOpen:function(e){V(e),Y(!0)},cards:n,isEditAvatarPopupOpen:D,isAddPlacePopupOpen:y,isEditProfilePopupOpen:j,isImageModalOpen:T,isDeleteImagePopupOpen:F,cardData:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===i._id}));t?E.unLikeCard(e._id,!t).then((function(t){a((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):E.likeCard(e._id,!t).then((function(t){a((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(_.jsx)(g,{isOpen:j,onClose:K,updateCurrentUser:Q}),Object(_.jsx)(C,{isOpen:D,onClose:K,onUpdateAvatar:X}),Object(_.jsx)(N,{isOpen:y,onClose:K,addNewPhoto:Z}),Object(_.jsx)(L,{isOpen:F,onClose:K,deleteCard:G}),Object(_.jsx)(k,{isOpen:T,cardObj:H,onClose:K}),Object(_.jsx)(S,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(I,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.7c9751ba.chunk.js.map