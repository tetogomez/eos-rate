import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import classNames from 'classnames'
import Link from '@material-ui/core/Link'
import HttpIcon from '@material-ui/icons/Http'
import TelegramIcon from '@material-ui/icons/Telegram'
import GitHubIcon from '@material-ui/icons/GitHub'

import TitlePage from 'components/title-page'

const useStyles = makeStyles(theme => ({
  wrapperContainers: {
    color: '#433F5B',
    padding: theme.spacing(6, 2),
    '& h6': {
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 4)
    }
  },
  firstContainer: {
    '& h5': {
      fontSize: theme.typography.h4.fontSize,
      marginBottom: 12.5
    }
  },
  boxLinks: {
    display: 'flex',
    marginTop: theme.spacing(3),
    '& a': {
      '&:hover': {
        textDecoration: 'none'
      }
    },
    '& svg': {
      marginRight: theme.spacing(3)
    },
    '& p': {
      marginTop: 0
    }
  }
}))

const Help = () => {
  const classes = useStyles()
  const { t } = useTranslation('help')

  return (
    <Box>
      <TitlePage title={t('tabTitle')} />
      <Grid container direction='column'>
        <Grid item xs>
          <Grid
            container
            direction='column'
            className={classNames(
              classes.wrapperContainers,
              classes.firstContainer
            )}
          >
            <Typography variant='h5'>{t('title')}</Typography>
            <Typography variant='body2' align='justify' paragraph>
              {t('paragraph')}
            </Typography>

            <Box className={classes.boxLinks}>
              <GitHubIcon />
              <Link
                href='https://github.com/eoscostarica'
                target='_blank'
                rel='noreferrer'
              >
                <Typography variant='body1'>{t('githubEOSCR')}</Typography>
              </Link>
            </Box>
            <Box className={classes.boxLinks}>
              <TelegramIcon />
              <Link
                href='https://web.telegram.org/#/eoscr'
                target='_blank'
                rel='noreferrer'
              >
                <Typography variant='body1'>{t('telegramChannel')}</Typography>
              </Link>
            </Box>
            <Box className={classes.boxLinks}>
              <HttpIcon />
              <Link
                href='https://eoscostarica.io/'
                target='_blank'
                rel='noreferrer'
              >
                <Typography variant='body1'>{t('websiteEOSCR')}</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Help
