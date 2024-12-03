import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function TermsAndConditions() {
  return (
    <>
      <Box
        component="section"
        sx={{ padding: "30px 0", background: "#eeeeee8c" }}
      >
        <Container className="footer" maxWidth="lg">
          <Typography variant="h4" textAlign={"center"}>
            Terms And Conditions
          </Typography>
        </Container>
      </Box>
      <Box component="section" sx={{ padding: "50px 0" }}>
        <Container className="privacy-policy" maxWidth="lg">
          <Typography fontSize={14} marginBottom={"20px"}>
            Welcome to Time Site Technologies (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;)
            govern your access to and use of our website www.timemachineone.com
            (the &quot;Website&quot;). By using our Website, you agree to comply
            with and be bound by these Terms.
          </Typography>
          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            1. Purpose of the Website
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            The Website provides descriptions and information about our app.
            Users can browse various pages and, if interested, follow links to
            app stores to download the app.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            2. Data Collection and Usage{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            While we do not collect personal data directly through the Website,
            we do collect certain types of non-personal data to enhance user
            experience and improve our Website. This includes:{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>Usage Data: </strong> We collect information about how users
            interact with our Website. This includes data such as IP address,
            browser type, pages visited, and the duration of visits. This
            information helps us understand user behavior and improve the
            functionality and content of our Website.
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>Cookies: </strong> We use cookies and similar tracking
            technologies to enhance your experience on our Website. Cookies are
            small data files stored on your device that help us recognize your
            preferences, analyze site traffic, and improve site performance. You
            can manage or disable cookies through your browser settings if you
            prefer not to have cookies collected.
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            By using our Website, you consent to the collection of Usage Data
            and the use of cookies as described above.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            3. Compliance with Legal Requirements
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            We operate in accordance with applicable laws, including:
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>General Data Protection Regulation (GDPR): </strong> For
            users in the European Union.{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>California Consumer Privacy Act (CCPA):</strong> For users
            in California.{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>Federal Trade Commission (FTC) Guidelines: </strong> For
            compliance with consumer protection standards.{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            <strong>E-Commerce Regulations: </strong> For online transactions
            and digital marketplace compliance.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            4. Third-Party Services{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            Our Website does not integrate with third-party services directly.
            However, search engines may provide sponsored links to our Website
            based on search terms.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            5. User Rights and Discontinuation{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            Users have the right to discontinue use of the app at any time.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            6. Intellectual Property{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            All content on the Website, including text, graphics, logos, and
            images, is the property of Time Machine One or its licensors and is
            protected by copyright, trademark, and other intellectual property
            laws. Unauthorized use or reproduction of our content is prohibited.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            7. Disclaimers{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            The Website and its contents are provided &quot;as is&quot; and
            &quot;as available&quot; without warranties of any kind, either
            express or implied. We do not guarantee that the Website will be
            error-free or uninterrupted.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            8. Limitations of Liability{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            To the fullest extent permitted by law, Time Site Technologies will
            not be liable for any indirect, incidental, consequential, or
            punitive damages arising out of or related to your use of the
            Website or any content therein.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            9. Changes to Terms{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated effective date. Your
            continued use of the Website after any changes constitutes your
            acceptance of the new Terms.{" "}
          </Typography>

          <Typography
            variant="h6"
            fontFamily={' "Rubik", sans-serif'}
            fontSize={18}
            marginBottom={"20px"}
          >
            {" "}
            10. Contact Us{" "}
          </Typography>
          <Typography fontSize={14} marginBottom={"20px"}>
            {" "}
            If you have any questions about these Terms, please contact us at
            <Link href="/" style={{ textDecoration: "underline" }}>
              {" "}
              legal@time-site.com.
            </Link>{" "}
            By using the Website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms.{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default TermsAndConditions;
