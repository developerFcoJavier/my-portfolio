import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = (props) =>{
    
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#636866',
          color: '#fff',
          maxWidth: 280,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
    }));

    return(
        <HtmlTooltip title={<TooltipContent project={props.content}/>} placement={props.sx.placement} arrow>
            {props.children}
        </HtmlTooltip>
    );
}

const TooltipContent = ({project}) => {
    return (
        <>
            <h2>{project.name}</h2>
            <h3>{project.tooltip}</h3>
        </>
    )
}
export default CustomTooltip;