import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import styled, { createGlobalStyle } from 'styled-components';
import {
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as CircleIcon,
  RemoveCircle as IndeterminateCircleIcon
} from '@material-ui/icons';

import Colors from './Colors';
import Shapes from './Shapes';

export const getTheme = () => {
  return {
    palette: {
      primary: { main: Colors.primary },
      secondary: { main: Colors.secondary },
      background: {
        default: Colors.background,
        paper: Colors.background
      },
      text: {
        primary: Colors.textPrimary,
        secondary: Colors.textSecondary,
        disabled: Colors.action
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'Roboto,sans-serif',
      fontSize: 14,
      lineHeight: '16px'
    },
    shape: { borderRadius: Shapes.borderRadius },
    props: {
      MuiRadio: {
        disableRipple: true,
        color: 'default'
      },
      MuiCheckbox: {
        size: 'small',
        icon: <CircleIcon/>,
        checkedIcon: <CheckCircleIcon color="secondary"/>,
        indeterminateIcon: <IndeterminateCircleIcon/>
      },
      MuiLink: { underline: 'always' },
      MuiPaper: { elevation: 1 },
      MuiInputLabel: { margin: 'none' },
      MuiFilledInput: { margin: 'none' },
      MuiFormControl: { margin: 'none', variant: 'outlined' },
      MuiIconButton: { size: 'small' },
      MuiInputBase: { variant: 'outlined', color: 'secondary' },
      MuiExpansionPanel: { elevation: 0 },
      MuiDrawer: { style: { zIndex: 1000 } },
      MuiListItem: { dense: true },
      MuiFab: { size: 'small' },
      MuiTable: { size: 'small' },
      MuiSelect: {
        SelectDisplayProps: {
          style: {
            color: Colors.secondary,
            paddingBottom: 8,
            paddingTop: 8,
            borderRadius: Shapes.borderRadius,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            fontSize: 14
          }
        }
      },
      MuiTextField: {
        margin: 'none',
        variant: 'outlined',
        fullWidth: true,
        autoComplete: 'off'
      },
      MuiSvgIcon: {
        fontSize: 'small'
      },
      MuiIcon: {
        fontSize: 'small',
        color: 'action'
      }
    },
    overrides: {
      MuiToggleButton: {
        root: {
          width: '100%',
          textTransform: 'inherit',
          border: `1px solid rgba(0, 0, 0,0.3)`,
          color: '#000000',
          '&$selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            fontWeight: 600,
            color: '#000000'
          },
          padding: '5px 20px'
        }
      },
      MuiTableContainer: {
        root: { borderRadius: Shapes.borderRadius, border: '1px solid #EFE2FF' }
      },
      MuiTable: { root: { borderRadius: Shapes.borderRadius } },
      MuiTableHead: {
        root: {
          background: Colors.tableHeader,
          borderRadius: '10px 10px 0px 0px'
        }
      },
      MuiTableRow: { root: { height: 51, boxSizing: 'border-box' } },
      MuiTableCell: {
        head: { fontSize: 14, fontWeight: 'normal', color: Colors.secondary }
      },
      MuiFormControlLabel: {
        label: {
          fontFamily: 'Roboto,sans-serif',
          fontSize: 14,
          lineHeight: '16px'
        }
      },
      MuiLink: {
        root: {
          cursor: 'pointer',
          color: Colors.link,
          '&:hover': {
            color: Colors.linkHovered
          }
        }
      },
      MuiRadio: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      },
      MuiPaper: {
        elevation1: {
          boxShadow: '0px 30px 40px rgba(119, 111, 196, 0.1)',
          borderRadius: Shapes.cardBorderRadius
        }
      },
      MuiButton: {
        root: {
          borderRadius: Shapes.borderRadius,
          textTransform: 'none'
        },
        contained: {
          padding: '10px 30px'
        },
        outlined: {
          padding: '10px 30px',
          boxSizing: 'border-box'
        },
        outlinedPrimary: {
          border: `1px solid ${Colors.primary}`,
          '&:hover': {
            color: Colors.background,
            backgroundColor: Colors.primary
          }
        },
        outlinedSecondary: {
          border: `1px solid ${Colors.secondary}`,
          '&:hover': {
            color: Colors.background,
            backgroundColor: Colors.secondary
          }
        }
      },
      MuiIconButton: {
        sizeSmall: {
          marginLeft: 2,
          marginRight: 2,
          padding: 4
        }
      },
      MuiExpansionPanel: {
        root: {
          backgroundColor: 'transparent'
        }
      },
      MuiExpansionPanelSummary: {
        root: {
          minHeight: '40px !important',
          padding: '0 16px'
        },
        content: {
          margin: '12px 0 !important'
        }
      },
      MuiExpansionPanelDetails: {
        root: {
          padding: '0 16px 14px',
          display: 'block'
        }
      },
      MuiFormHelperText: {
        contained: {
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 2,
          lineHeight: 1
        }
      },
      MuiInputBase: {
        root: {
          height: 'inherit',
          '&$disabled': {
            background: Colors.disabled
          },
          '&$disabled .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        },
        input: {
          color: Colors.secondary,
          fontFamily: 'Roboto,sans-serif',
          fontSize: 14,
          lineHeight: '16px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          padding: '16px 18px'
        }
      },
      MuiTypography: {
        h5: {
          fontWeight: 'bold',
          fontSize: 18,
          fontFamily: 'Segoe UI,sans-serif'
        },
        body1: {
          fontSize: 14
        }
      },
      MuiAutocomplete: {
        inputRoot: {
          padding: '0 !important',
          paddingRight: '8px !important'
        },
        input: {
          height: 'inherit',
          padding: '16px 18px !important'
        },
        paper: {
          boxShadow: '0px 15px 30px rgba(119, 111, 196, 0.1)'
        },
        popper: {
          minWidth: 250
        },
        listbox: {
          minWidth: 250,
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(140, 140, 140, 0.2)'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(140, 140, 140, 0.4)'
          },
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: Shapes.borderRadius
        },
        adornedEnd: {
          paddingRight: '8px'
        },
        multiline: {
          padding: 0,
          '& textarea': {
            padding: '16px 18px'
          },
          '& textarea:focus': {
            border: 'none'
          }
        },
        input: {
          padding: '16px 18px'
        }
      },
      MuiMenu: {
        paper: {
          borderRadius: Shapes.cardBorderRadius,
          boxShadow: '0px 15px 30px rgba(119, 111, 196, 0.1)',

          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(140, 140, 140, 0.2)'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(140, 140, 140, 0.4)'
          },
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          }
        }
      },
      MuiMenuItem: {
        root: {
          whiteSpace: 'inherit !important'
        }
      },
      MuiList: {
        padding: {
          paddingRight: '0 !important'
        }
      },
      MuiListItem: {
        root: {
          backgroundColor: 'none',
          '&$divider': {
            borderBottom: 'none',
            backgroundColor: 'none'
          },
          '&:hover  , &$selected': {
            background: 'linear-gradient(90deg, #f1f1f1 20%, #ffffff 100%)',
            '& .MuiSvgIcon-root': {
              color: Colors.secondary
            },
            '& .MuiTypography-root': {
              color: Colors.secondary
            }
          }
        },
        button: {
          transition: 'none'
        }
      },
      MuiTextField: {
        root: {
          marginTop: 2,
          marginBottom: 2
        }
      },
      MuiFormControl: {
        root: {
          marginTop: 2,
          marginBottom: 2
        }
      },
      MuiInputAdornment: {
        positionEnd: {
          marginLeft: 0
        }
      },
      MuiDialog: {
        root: {
          background: 'rgba(101, 82, 199, 0.5)'
        },
        paper: {
          padding: '30px 50px',
          borderRadius: 30,
          boxShadow: '0px 30px 40px rgba(95, 87, 181, 0.2)',
          opacity: 'none'
        }
      }
    }
  };
};

export const theme = createMuiTheme(getTheme());

export const ThemeWrapper = styled.main`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${Colors.textPrimary};

  .text-primary {
    color: ${Colors.textPrimary};
  }
  .text-secondary {
    color: ${Colors.textSecondary};
  }
  .color-primary {
    color: ${Colors.primary};
  }
  .color-secondary {
    color: ${Colors.secondary};
  }
  .text-success {
    color: ${Colors.textSuccess};
  }
  .bg-color {
    background-color: ${Colors.background};
  }
  .bg-primary {
    background-color: ${Colors.primary};
  }
  .bg-secondary {
    background-color: ${Colors.secondary};
  }
  .border-primary {
    border: 1px solid ${Colors.primary};
  }
  .border-secondary {
    border: 1px solid ${Colors.secondary};
  }
  .border {
    border: 1px solid ${Colors.border};
  }
  .br-top {
    border-top: 1px solid ${Colors.border} !important;
  }
  .br-bot {
    border-bottom: 1px solid ${Colors.border} !important;
  }
  .border-radius {
    border-radius: ${Shapes.borderRadius} !important;
  }
  .card {
    border-radius: ${Shapes.cardBorderRadius};
    border: 1px solid ${Colors.border};
  }
`;

export const TextareaGlobalStyle = createGlobalStyle`
  textarea {
    border: 1px solid ${Colors.textAreaBorder};
    border-radius: 10px;
    padding: 20px;
    color: ${Colors.secondary};
    width: 100%;
    max-width: 100%;
  }
  textarea:focus {
    outline: none;
    border: 1px solid ${Colors.secondary};
  }
`;
