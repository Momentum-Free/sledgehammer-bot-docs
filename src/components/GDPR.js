import React from 'react';
import clsx from 'clsx';
import styles from './PrivacyPolicy.module.css';

const BlockList = [
  {
    title: 'GDPR Privacy Notice to EU Residents',
    description: (
      <>
        If you are a resident of the European Union (“EU”), United Kingdom, Lichtenstein, Norway, or Iceland, you may have additional rights under the EU General Data Protection Regulation (the “GDPR”) with respect to your Personal Data, as outlined below.
      </>
    ),
  },
  {
    description: (
      <>
        This GDPR Privacy Notice supplements the Company’s Privacy Policy (the “Privacy Policy”). If you have any questions about this notice or whether any of the following applies to you, please contact us at <a href="mailto:gdpr@momentum-free.com">gdpr@momentum-free.com</a>.
      </>
    ),
  },
  {
    title: 'What Personal Data Do We Collect from You?',
    description: (
      <>
        We collect Personal Data about you when you provide such information directly to us, when third parties such as our business partners or service providers provide us with Personal Data about you, or when Personal Data about you is automatically collected in connection with your use of our Services.
      </>
    ),
  },
  {
    title: 'Information we collect directly from you:',
    description: (
      <>
        We receive Personal Data directly from you when you provide us with such Personal Data, including without limitation the following:
      </>
    ),
    extraitem: (
      <>
        <ol type="1">
          <li>Website:<br />
            <ol>
              <li>
                Nick name
              </li>
              <li>
                Email
              </li>
              <li>
                Dados de navegação de user
              </li>
            </ol>
          </li>
          <li>Bots de discord:<br />
            <ol>
              <li>
                Bots de discord:<br />
                <ol>
                  <li>
                    Discord userID
                  </li>
                  <li>
                    IP address
                  </li>
                </ol>
              </li>
              <li>
                Hermes protocol:<br />
                <ol>
                  <li>
                    Discord userID
                  </li>
                  <li>
                    Crypto wallet address
                  </li>
                  <li>
                    Guild/channel IDs
                  </li>
                </ol>
              </li>
              <li>
                Client projects that we host the database can store the following
                information:<br />
                <ol>
                  <li>
                    Discord userID
                  </li>
                  <li>
                    Client score (score formula provided by the client)
                  </li>
                </ol>
              </li>
              <li>
                Other bots:<br />
                <ol>
                  <li>
                    Discord userID
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </>
    )
  },
  {
    title: 'Information we receive from third party sources:',
    description: (
      <>
        If you interact with a third party service when using our Services, such as if you use a third party service to log-in to our Services (e.g.Discord), or if you share content from our Services through a third party social media service, the third party service may send us information about you, such as information from your public profile, if the third party service and your account settings allow such sharing. The information we receive will depend on the policies and your account settings with the third-party service.
      </>
    ),
  },
  {
    title: 'How Do We Use Your Personal Data?',
    description: (
      <>
        We process Personal Data to operate, improve, understand and personalize our Services. We will only process your Personal Data if we have a lawful basis for doing so. We do not share or sell your personal information for advertising or marketing purposes.
      </>
    ),
  },
  {
    title: 'How and With Whom Do We Share Your Data?',
    description: (
      <>
        We don’t share your personal information with any third-parties, except when we believe it is necessary to comply with applicable law.
      </>
    ),
  },
  {
    title: 'How Long Do We Retain Your Personal Data?',
    description: (
      <>
        We retain Personal Data about you for as long as you have an open account with us.
      </>
    ),
  },
  {
    title: 'What Security Measures Do We Use?',
    description: (
      <>
        We use commercially reasonable means to protect your Personal Data.
      </>
    ),
  },
  {
    title: 'Personal Data of Children:',
    description: (
      <>
        As noted in the Terms of Use, we do not knowingly collect or solicit Personal Data from anyone under the age of 16. If you are under 16, please do not attempt to register for the Services or send any Personal Data about yourself to us. If we learn that we have collected Personal Data from a child under age 16, we will delete that information as quickly as possible. If you believe that a child under 16 may have provided us Personal Data, please contact us at <a href="mailto:gdpr@momentum-free.com">gdpr@momentum-free.com</a>
      </>
    ),
  },
  {
    title: 'What Rights Do You Have Regarding Your Personal Data?',
    description: (
      <>
        You have certain rights with respect to your Personal Data. For more information about these rights, or to submit a request, please email privacy at <a href="mailto:gdpr@momentum-free.com">gdpr@momentum-free.com</a>
      </>
    ),
  },
  {
    title: 'What If You Have Questions Regarding Your Personal Data?',
    description: (
      <>
        If you have any questions about this GDPR Privacy Notice or our data practices, please contact us at the below email: <a href="mailto:gdpr@momentum-free.com">gdpr@momentum-free.com</a>
      </>
    ),
  }
];

function Block({ title, description, extraitem }) {
  return (
    <div className={clsx('col')}>
      <div className="padding-horiz--md">
        {title && (
          <h4 className={styles.subtitle}>{title}</h4>
        )}
        <p>{description}</p>
        <div>{extraitem}</div>
      </div>
    </div>
  );
}

export default function GDPR() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>GDPR</h1>
        {BlockList.map((props, idx) => (
          <Block key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
