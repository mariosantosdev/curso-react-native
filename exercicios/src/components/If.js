/*
    Neste exemplo fazemos um outro tipo de renderização condicional
    verificamos se o campos usuario está sendo utilizado, se não 
    ele não exibe nenhum campo
*/
export default props => {
    if (props.test) {
        return props.children;
    } else {
        return false;
    }
}