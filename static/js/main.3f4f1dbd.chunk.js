(this["webpackJsonpsd-0x-project-movie-card-library-stateful"]=this["webpackJsonpsd-0x-project-movie-card-library-stateful"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(15),a(16),a(1)),l=a(2),c=a(4),u=a(3),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"movie-card-header"},i.a.createElement("h1",{className:"page-title"},"Movie Cards Library"))}}]),a}(i.a.Component),m=a(9),h=a(6),p=a(5),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.rating;return i.a.createElement("div",{className:"movie-card-rating","data-testid":"rating"},i.a.createElement("span",{className:"rating"},e))}}]),a}(i.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,r=e.rating,s=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card"},i.a.createElement("div",{className:"movie-card"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:s}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{"data-testid":"movie-card-title",className:"movie-card-title"},t),i.a.createElement("h5",{className:"movie-card-subtitle"},a),i.a.createElement("p",{className:"movie-card-storyline"},n)),i.a.createElement(v,{rating:r})))}}]),a}(i.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movies;return i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},e.map((function(e){return i.a.createElement(b,{key:e.title,movie:e})})))}}]),a}(i.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{action:"","data-testid":"search-bar-form"},i.a.createElement("label",{htmlFor:"text-input","data-testid":"text-input-label"},"Inclui o texto:"," ",i.a.createElement("input",{id:"text-input",type:"text",name:"searchText",value:this.props.searchText,onChange:this.props.onSearchTextChange,"data-testid":"text-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"checkbox-input","data-testid":"checkbox-input-label"},"Mostrar somente favoritos"," ",i.a.createElement("input",{id:"checkbox-input",type:"checkbox",name:"bookmarkedOnly",checked:this.props.bookmarkedOnly,onChange:this.props.onBookmarkedChange,"data-testid":"checkbox-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"select-input","data-testid":"select-input-label"},"Filtrar por g\xeanero:",i.a.createElement("select",{style:{marginLeft:10},name:"selectedGenre",value:this.props.selectedGenre,onChange:this.props.onSelectedGenreChange,id:"select-input","data-testid":"select-input"},i.a.createElement("option",{value:"","data-testid":"select-option"},"Todos"),i.a.createElement("option",{value:"action","data-testid":"select-option"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy","data-testid":"select-option"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller","data-testid":"select-option"},"Suspense"))))}}]),a}(i.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={subtitle:"",title:"",imagePath:"",storyline:"",rating:0,genre:"action"},n.updateState=n.updateState.bind(Object(p.a)(n)),n.submit=n.submit.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"updateState",value:function(e){var t=e.target;this.setState(Object(h.a)({},t.name,t.value))}},{key:"submit",value:function(e){e.preventDefault(),(0,this.props.addNewMovie)(this.state),this.setState({subtitle:"",title:"",imagePath:"",storyline:"",rating:0,genre:"action"})}},{key:"render",value:function(){return i.a.createElement("form",{action:"","data-testid":"add-movie-form"},i.a.createElement("label",{htmlFor:"title-input","data-testid":"title-input-label"},"T\xedtulo"," ",i.a.createElement("input",{id:"title-input",type:"text",name:"title",value:this.state.title,"data-testid":"title-input",onChange:this.updateState})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"subtitle-input","data-testid":"subtitle-input-label"},"Subt\xedtulo"," ",i.a.createElement("input",{id:"subtitle-input",type:"text",name:"subtitle",onChange:this.updateState,value:this.state.subtitle,"data-testid":"subtitle-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"image-input","data-testid":"image-input-label"},"Imagem"," ",i.a.createElement("input",{id:"image-input",type:"text",name:"imagePath",onChange:this.updateState,value:this.state.imagePath,"data-testid":"image-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"storyline-input","data-testid":"storyline-input-label"},"Sinopse"," ",i.a.createElement("textarea",{name:"storyline",onChange:this.updateState,id:"storyline-input",cols:"30",rows:"10",value:this.state.storyline,"data-testid":"storyline-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"rating-input","data-testid":"rating-input-label"},"Avalia\xe7\xe3o"," ",i.a.createElement("input",{id:"rating-input",type:"number",name:"rating",onChange:this.updateState,value:this.state.rating,"data-testid":"rating-input"})),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"genre-input","data-testid":"genre-input-label"},"G\xeanero",i.a.createElement("select",{style:{marginLeft:10},name:"genre",onChange:this.updateState,id:"genre-input","data-testid":"genre-input",value:this.state.genre},i.a.createElement("option",{value:"action","data-testid":"genre-option"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy","data-testid":"genre-option"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller","data-testid":"genre-option"},"Suspense"))),i.a.createElement("button",{"data-testid":"send-button",onClick:this.submit},"Adicionar filme"))}}]),a}(i.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchText:"",bookmarkedOnly:!1,selectedGenre:"",movies:e.movies},n.searchTextInput=n.searchTextInput.bind(Object(p.a)(n)),n.updateMoviesByText=n.updateMoviesByText.bind(Object(p.a)(n)),n.bookmarkedOnlyInput=n.bookmarkedOnlyInput.bind(Object(p.a)(n)),n.updateMoviesByCheckbox=n.updateMoviesByCheckbox.bind(Object(p.a)(n)),n.selectedGenreInput=n.selectedGenreInput.bind(Object(p.a)(n)),n.updateMoviesByGenre=n.updateMoviesByGenre.bind(Object(p.a)(n)),n.addNewMovie=n.addNewMovie.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"searchTextInput",value:function(e){var t=e.target;this.setState(Object(h.a)({},t.name,t.value),this.updateMoviesByText)}},{key:"bookmarkedOnlyInput",value:function(e){var t=e.target;this.setState(Object(h.a)({},t.name,t.checked),this.updateMoviesByCheckbox)}},{key:"updateMoviesByText",value:function(){var e=this,t=this.state.movies.filter((function(t){return t.title.toLowerCase().includes(e.state.searchText.toLowerCase())||t.subtitle.toLowerCase().includes(e.state.searchText.toLowerCase())||t.storyline.toLowerCase().includes(e.state.searchText.toLowerCase())}));this.setState({movies:t}),""===this.state.searchText&&this.setState({movies:this.props.movies})}},{key:"selectedGenreInput",value:function(e){var t=e.target;this.setState(Object(h.a)({},t.name,t.value),this.updateMoviesByGenre)}},{key:"updateMoviesByGenre",value:function(){var e=this;if(""===this.state.selectedGenre)return this.setState({movies:this.props.movies});this.setState({movies:this.props.movies},(function(){var t=e.state.selectedGenre,a=e.state.movies.filter((function(e){return e.genre===t}));e.setState({movies:a})}))}},{key:"addNewMovie",value:function(e){this.setState((function(t){return{movies:[].concat(Object(m.a)(t.movies),[e])}}))}},{key:"updateMoviesByCheckbox",value:function(){if(!0===this.state.bookmarkedOnly){var e=this.state.movies.filter((function(e){return!0===e.bookmarked}));this.setState({movies:e})}else!1===this.state.bookmarkedOnly&&this.setState({movies:this.props.movies})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(y,{searchText:this.searchText,onSearchTextChange:this.searchTextInput,bookmarkedOnly:this.bookmarkedOnly,onBookmarkedChange:this.bookmarkedOnlyInput,selectedGenre:this.selectedGenre,onSelectedGenreChange:this.selectedGenreInput}),i.a.createElement(g,{movies:this.state.movies}),i.a.createElement(f,{addNewMovie:this.addNewMovie}))}}]),a}(i.a.Component),E=[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(k,{movies:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3f4f1dbd.chunk.js.map