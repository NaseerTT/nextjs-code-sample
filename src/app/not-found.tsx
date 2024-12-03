import { Box, Container, Typography } from "@mui/material";
import React from "react"

function NotFound() {
    return (<>
        <Box
            component="section"
            sx={{ padding: "30px 0", background: '#eeeeee8c' }}
        >
            <Container className="footer" maxWidth="lg">
                <Typography variant="h4" textAlign={'center'}>
                    Privacy Policy
                </Typography>
            </Container>
        </Box>
        
        <Box
            component="section"
            sx={{ padding: "50px 0" }}
        >
            <Container className="privacy-policy" maxWidth="lg">
                <Typography fontSize={14} marginBottom={'20px'}>
                    At Time Machine One (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, and protect your information when you visit our website www.timemachineone.com (the &quot;Website&quot;). By using our Website, you consent to the practices described in this Privacy Policy.
                </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>1. Information We Collect</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>We collect the following types of non-personal information:</Typography>
                <Typography fontSize={14} marginBottom={'20px'}><strong>Usage Data: </strong> We collect information about how users interact with our Website. This includes data such as IP address, browser type, pages visited, and the duration of visits. This data helps us understand user behavior and improve our Website. </Typography>
                <Typography fontSize={14} marginBottom={'20px'}><strong>Cookies: </strong> We use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small data files placed on your device that help us recognize your preferences, analyze site traffic, and improve site performance. You can manage or disable cookies through your browser settings if you do not wish to have cookies collected. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>2. How We Use Your Information</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>The information we collect is used for the following purposes: To Improve Our Website: Usage Data helps us understand how users interact with our Website, allowing us to enhance its functionality and content. To Analyze Website Traffic: Cookies and Usage Data enable us to track and analyze site traffic, which helps us optimize the user experience. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>3. Data Sharing and Disclosure</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>We do not share your information with third parties except as described below: Service Providers: We may use third-party services to assist in website analytics and SEO. These service providers are contractually obligated to protect your data and use it only for the purposes for which it was shared. </Typography>
                <Typography fontSize={14} marginBottom={'20px'}>Legal Requirements: We may disclose your information if required by law or to respond to legal processes, such as subpoenas or court orders. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>4. Your Choices</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>Cookies: You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our Website. Opt-Out: If you wish to opt out of certain data collection practices, please contact us at legal@timemachineone.com. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>5. Security</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is completely secure. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>6. Children&apos;s Privacy</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>Our Website is not intended for children under the age of 13. We do not knowingly collect or solicit personal data from children under 13. If we become aware that we have collected such information, we will take steps to delete it. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>7. Changes to This Privacy Policy</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Website after any changes constitutes your acceptance of the revised Privacy Policy. </Typography>
                <Typography variant="h6" fontFamily={'"Rubik", sans-serif'} fontSize={18}>8. Contact Us</Typography>
                <Typography fontSize={14} marginBottom={'20px'}>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at legal@timemachineone.com. By using our Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</Typography>
            </Container>

        </Box>
    </>)
}

export default NotFound;