import React from 'react'
import playbtn from './favicon.svg'
import { CardContent, Typography, Box, CardMedia, Card } from '@material-ui/core'

const ListItems = ({title,subtitle}) => {
    return (
        
            <Card
                style={{
                    width: "100%",
                    height: 70,
                    display: "flex",
                    flexDirection: 'row',
                    backgroundColor: "whitesmoke",
                    boxShadow: "4px 4px 4px gray",
                    justifyContent: "space-between",
                    borderEndEndRadius: 25
                }}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {subtitle}
                        </Typography>
                    </CardContent>
                </Box>

                <CardMedia
                    style={{ width: 100, marginTop: 2.5, height: 70, alignItems: 'flex-end' }}
                    component="img"
                    sx={{ width: 1, height: 1 }}
                    image={playbtn}
                    alt="Live from space album cover"
                />

            </Card>
        
    )
}

export default ListItems
