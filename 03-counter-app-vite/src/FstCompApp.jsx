import PropTypes from 'prop-types'

const newValue = 'mensaje de prueba';


export const FstCompApp = ({title, subtitle}) => {
    return ( 
        <>
        <h1>{title}</h1>
            <h2>Prueba del primer componente</h2>
            <h3>{subtitle}</h3>
            <code>{newValue}</code>
            <p>Prueba de parrafo</p>
        </>
     
    )
}

FstCompApp.protoTypes = {
title : PropTypes.string.isRequired,
subtitle : PropTypes.string.isRequired
}

FstCompApp.defaultProps = {
    title: "Título por defecto",
    subtitle: "Subtítulo por defecto"
}