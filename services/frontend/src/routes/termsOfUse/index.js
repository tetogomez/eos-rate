import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { RicardianContract } from '@eoscostarica/eoscr-components'

import TitlePage from 'components/title-page'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    '& img': {
      width: '35px !important'
    },
    '& h4': {
      fontSize: '15px !important',
      fontWeight: '600'
    },
    '& a': {
      lineBreak: 'anywhere'
    },
    [theme.breakpoints.up('sm')]: {
      '& img': {
        width: '45px !important'
      },

      '& h4': {
        fontSize: '34px !important',
        fontWeight: 'normal'
      }
    }
  }
}))

const TermsOfUse = () => {
  const classes = useStyles()
  const { t } = useTranslation('termsOfUse')

  return (
    <Box className={classes.root}>
      <TitlePage title={t('tabTitle')} />
      <RicardianContract
        contractName='rateproducer'
        httpEndpoint='https://api.eosio.cr'
      />
    </Box>
  )
}

export default TermsOfUse
