import { Dispatcher} from './flux';

const controlPanelDispatcher = new Dispatcher();

document.getElementById(`userNameInput`).addEventListener(`input`,({target})=>{
    const name = target.value;
    console.log("Dispatching...", name);
    controlPanelDispatcher.dispatch(`TODO__NAMEINPUTACTION`);

})


document.forms.fontSizeForm.fontSize.forEach(element=>{
    element.addEventListener(`change`,({target})=>{
        controlPanelDispatcher.dispatch(`TODO__FONTUPDATEACTION`);
    })
})

controlPanelDispatcher.register(action=>{
    console.info("Received actioon...", action);

})

