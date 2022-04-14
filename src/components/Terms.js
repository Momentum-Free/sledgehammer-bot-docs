import React from 'react';
import clsx from 'clsx';
import styles from './PrivacyPolicy.module.css';

const BlockList = [
  {
    description: (
      <>
        Welcome to Momentum Free. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services, proprietary bots, and other applications (the “Services”). If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at Email: <a href="mailto:tos@momentum-free.com">TOS@momentum-free.com</a>
      </>
    ),
  },
  {
    description: (
      <>
        These Terms of Service (the “Terms”) are a binding contract between you and <b>MOMENTUM LANCER LDA.</b> (“Momentum Free,” “we” and “us”). Your use of the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document as well as those in the <a href="/privacy-policy">Privacy Policy</a>. <b>Your use of or participation in certain Services may also be subject to additional policies, rules and/or conditions (“Additional Terms”), which are incorporated herein by reference, and you understand and agree that by using or participating in any such Services, you agree to also comply with these Additional Terms. </b>
      </>
    ),
  },
  {
    description: (
      <>
        <b>Please read these Terms carefully.</b> They cover important information about Services provided to you. <b>These Terms include information about future changes to these Terms, automatic renewals, limitations of liability, a class action waiver and resolution of disputes by arbitration instead of in court. PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.</b>
      </>
    ),
  },
  {
    description: (
      <>
        <b>ARBITRATION NOTICE AND CLASS ACTION WAIVER:</b> EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION AGREEMENT SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
      </>
    ),
  },
  {
    title: 'Will these Terms ever change?',
    description: (
      <>
        We are constantly trying to improve our Services, so these Terms may need to change along with our Services. We reserve the right to change the Terms at any time, but if we do, we will place a notice by sending you an email, and/or notify you by some other means.
      </>
    ),
  },
  {
    description: (
      <>
        If you don’t agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the Services in any way after a change to the Terms is effective, that means you agree to all of the changes.
      </>
    ),
  },
  {
    description: (
      <>
        Except for changes by us as described here, no other amendment or modification of these Terms will be effective unless in writing and signed by both you and us.
      </>
    ),
  },
  {
    title: 'What about my privacy?',
    description: (
      <>
        Momentum Free takes the privacy of its users very seriously. For the current Privacy Policy, please click <a href="/privacy-policy">here</a>.<br /><br />
        <i>Children’s Online Privacy Protection Act</i><br /><br />
        The Children’s Online Privacy Protection Act (“COPPA”) requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under thirteen (13). We do not knowingly collect or solicit personally identifiable information from children under sixteen (16); if you are a child under sixteen (16), please do not attempt to register for or otherwise use the Services or send us any personal information. If we learn we have collected personal information from a child under sixteen (16), we will delete that information as quickly as possible. If you believe that a child under sixteen (16) may have provided us personal information, please contact us at <a href="mailto:tos@momentum-free.com">TOS@momentum-free.com</a>.
      </>
    ),
  },
  {
    title: 'What are the basics of using Momentum Free?',
    description: (
      <>
        You may need to access certain parts or features of the Services (e.g. our proprietary bots) by using your account credentials and password from other services (“Third-Party Account”), such as those offered by Discord. By using the Services through a Third-Party Account, you permit us to access certain information from such account for use by the Services. You are ultimately in control of how much information is accessible to us and may exercise such control by adjusting your privacy settings on your Third-Party Account.  We store your account credentials but will not store your password. You promise to provide us with accurate, complete, and updated registration information about yourself. You may not use any Third-Party Account that you do not have the right to use, or another person’s account credentials without authorization from that other person. You may not transfer your account to anyone else without our prior written permission.
      </>
    ),
  },
  {
    description: (
      <>
        You represent and warrant that you are an individual of legal age to form a binding contract (or if not, you’ve received your parent’s or guardian’s permission to use the Services and have gotten your parent or guardian to agree to these Terms on your behalf). If you’re agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization’s or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” in these Terms, except for in this sentence, refer to that organization or entity).
      </>
    ),
  },
  {
    description: (
      <>
        You will only use the Services for your own internal, personal, non-commercial use, and not on behalf of or for the benefit of any Third-Party or any entity, and only in a manner that complies with all laws that apply to you. If your use of the Services is prohibited by applicable laws, then you aren’t authorized to use the Services. We can’t and won’t be responsible for your using the Services in a way that breaks the law.
      </>
    ),
  },
  {
    description: (
      <>
        You must protect the security of your Third-Party Account credentials and password and any other access tools or credentials. You’re responsible for any activity associated with your account.
      </>
    ),
  },
  {
    title: 'Are there restrictions in how I can use the Services?',
    description: (
      <>
        You represent, warrant, and agree that you will not contribute any Content or User Submission (each of those terms is defined below) or otherwise use the Services or interact with the Services in a manner that:
      </>
    ),
    extraitem: (
      <ol type="a">
        <li>
          infringes or violates the intellectual property rights or any other rights of anyone else (including Momentum Free);
        </li>
        <li>
          violates any law or regulation, including, without limitation, any applicable export control laws, privacy laws or any other purpose not reasonably intended by Momentum Free;
        </li>
        <li>
          is dangerous, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;
        </li>
        <li>
          jeopardizes the security of your account or anyone else’s (such as allowing someone else to log in to the Services as you);
        </li>
        <li>
          attempts, in any manner, to obtain the password, account, or other security information from any other user;
        </li>
        <li>
          violates the security of any computer network, or cracks any passwords or security encryption codes;
        </li>
        <li>
          runs Maillist, Listserv, any form of auto-responder or “spam” on the Services, or any processes that run or are activated while you are not logged into the Services, or that otherwise interfere with the proper working of the Services (including by placing an unreasonable load on the Services’ infrastructure);
        </li>
        <li>
          “crawls,” “scrapes,” or “spiders” any page, data, or portion of or relating to the Services or Content (through use of manual or automated means);
        </li>
        <li>
          copies or stores any significant portion of the Content; or
        </li>
        <li>
          decompiles, reverse engineers, or otherwise attempts to obtain the source code or underlying ideas or information of or relating to the Services.
        </li>
      </ol>
    )
  },
  {
    description: (
      <>
        A violation of any of the foregoing is grounds for termination of your right to use or access the Services.
      </>
    ),
  },
  {
    title: 'What are my rights in the Services?',
    description: (
      <>
        The materials displayed or performed or available on or through the Services, including, but not limited to, text, graphics, data, articles, photos, images, illustrations, User Submissions (as defined below) and so forth (all of the foregoing, the “Content”) are protected by copyright and/or other intellectual property laws. You promise to abide by all copyright notices, trademark rules, information, and restrictions contained in any Content you access through the Services, and you won’t use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose any Content not owned by you, (i) without the prior consent of the owner of that Content or (ii) in a way that violates someone else’s (including Momentum Free’) rights.
      </>
    ),
  },
  {
    description: (
      <>
        Subject to these Terms, we grant each user of the Services a worldwide, non-exclusive, non-sublicensable and non-transferable license to use (i.e., to download and display locally) Content solely for purposes of using the Services. Use, reproduction, modification, distribution or storage of any Content for any purpose other than using the Services is expressly prohibited without prior written permission from us. You understand that Momentum Free owns the Services. You won’t modify, publish, transmit, participate in the transfer or sale of, reproduce (except as expressly provided in this Section), create derivative works based on, or otherwise exploit any of the Services. The Services may allow you to copy or download certain Content, but please remember that even where these functionalities exist, all the restrictions in this section still apply.
      </>
    ),
  },
  {
    title: 'What about anything I contribute to the Services – do I have to grant any licenses to Momentum Free or to other users?',
    description: (
      <>
        <i>User Submissions</i><br />
        Anything you post, upload, share, store, or otherwise provide through the Services is your “User Submission”. Some User Submissions may be viewable by other users. You are solely responsible for all User Submissions you contribute to the Services. You represent that all User Submissions submitted by you are accurate, complete, up-to-date, and in compliance with all applicable laws, rules and regulations. <br /><br />
        You agree that you will not post, upload, share, store, or otherwise provide through the Services any User Submissions that: (i) infringe any third party’s copyrights or other rights (e.g., trademark, privacy rights, etc.); (ii) contain sexually explicit content or pornography; (iii) contain hateful, defamatory, or discriminatory content or incite hatred against any individual or group; (iv) exploit minors; (v) depict unlawful acts or extreme violence; (vi) depict animal cruelty or extreme violence towards animals; (vii) promote fraudulent schemes, multi-level marketing (MLM) schemes, get rich quick schemes, online gaming and gambling, cash gifting, work from home businesses, or any other dubious money-making ventures; or (viii) that violate any law.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Licenses</i><br />
        In order to display your User Submissions on the Services, and to allow other users to enjoy them (where applicable), you grant us certain rights in those User Submissions (see below for more information). Please note that all of the following licenses are subject to our <a href="/privacy-policy">Privacy Policy</a> to the extent they relate to User Submissions that are also your personally-identifiable information.<br /><br />
        By submitting User Submissions through the Services, you hereby do and shall grant Momentum Free a worldwide, non-exclusive, perpetual, royalty-free, fully paid, sublicensable and transferable license to use, edit, modify, truncate, aggregate, reproduce, distribute, prepare derivative works of, display, perform, and otherwise fully exploit the User Submissions in connection with this site, the Services and our (and our affiliates’, our and their respective successors’ and assigns’) businesses, including without limitation for promoting and redistributing part or all of this site or the Services (and derivative works thereof), including the User Submissions contained therein, in any media formats and through any media channels (including, without limitation, Third-Party websites, social medias, and feeds), and including after your termination of your account or the Services. You also hereby do and shall grant each user of this site and/or the Services a non-exclusive, perpetual license to access your User Submissions through this site and/or the Services, and to use, edit, modify, reproduce, distribute, prepare derivative works of, display and perform such User Submissions, including after your termination of your account or the Services. For clarity, the foregoing license grants to us and our users do not affect your other ownership or license rights in your User Submissions, including the right to grant additional licenses to your User Submissions, unless otherwise agreed in writing. You represent and warrant that you have all rights to grant such licenses to us without infringement or violation of any Third-Party rights, including without limitation, any privacy rights, publicity rights, copyrights, trademarks, contract rights, or any other intellectual property or proprietary rights.<br /><br />
        Certain features of the Services allow you to share information with others, including through your social networks or other services where you have an account (“Third-Party Accounts”). When Content is authorized for sharing, we will clearly identify the Content you are authorized to redistribute and the ways you may redistribute it, usually by providing a “share” button on or near the Content. If you share information from the Services with others through your Third-Party Accounts, such as your social networks, you authorize Momentum Free to share that information with the applicable Third-Party Account provider. Please review the policies of any Third-Party Account providers you share information with or through for additional information about how they may use your information. If you redistribute Content, you must be able to edit or delete any Content you redistribute, and you must edit or delete it promptly upon our request. <br /><br />
        Finally, you understand and agree that Momentum Free, in performing the required technical steps to provide the Services to our users (including you), may need to make changes to your User Submissions to conform and adapt those User Submissions to the technical requirements of connection networks, devices, services, or media, and the foregoing licenses include the rights to do so.
      </>
    ),
  },
  {
    title: 'Who is responsible for what I see and do on the Services?',
    description: (
      <>
        Any information or Content publicly posted or privately transmitted through the Services is the sole responsibility of the person from whom such Content originated, and you access all such information and Content at your own risk, and we aren’t liable for any errors or omissions in that information or Content or for any damages or loss you might suffer in connection with it. We cannot control and have no duty to take any action regarding how you may interpret and use the Content or what actions you may take as a result of having been exposed to the Content, and you hereby release us from all liability for you having acquired or not acquired Content through the Services. We can’t guarantee the identity of any users with whom you interact in using the Services and are not responsible for which users gain access to the Services.<br /><br />
        You are responsible for all Content you contribute, in any manner, to the Services, and you represent and warrant you have all rights necessary to do so, in the manner in which you contribute it.<br /><br />
        The Services may contain links or connections to third-party websites or services that are not owned or controlled by Momentum Free. When you access third-party websites or use third-party services, you accept that there are risks in doing so, and that Momentum Free is not responsible for such risks. <br /><br />
        Momentum Free has no control over, and assumes no responsibility for, the content, accuracy, privacy policies, or practices of or opinions expressed in any third-party websites or by any Third-Party that you interact with through the Services. In addition, Momentum Free will not and cannot monitor, verify, censor or edit the content of any third-party site or service. We encourage you to be aware when you leave the Services and to read the terms and conditions and privacy policy of each third-party website or service that you visit or utilize. By using the Services, you release and hold us harmless from any and all liability arising from your use of any third-party website or service. <br /><br />
        Your interactions with organizations and/or individuals found on or through the Services, including payment and delivery of goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such organizations and/or individuals. You should make whatever investigation you feel necessary or appropriate before proceeding with any online or offline transaction with any of these third parties. You agree that Momentum Free shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings.<br /><br />
        If there is a dispute between participants on this site or Services, or between users and any third party, you agree that Momentum Free is under no obligation to become involved. In the event that you have a dispute with one or more other users, you release Momentum Free, its directors, officers, employees, agents, and successors from claims, demands, and damages of every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes and/or our Services. You shall and hereby do waive Portugal Civil Code Section 1542 or any similar law of any jurisdiction, which says in substance: “A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.”
      </>
    ),
  },
  {
    title: 'Will Momentum Free ever change the Services?',
    description: (
      <>
        We’re always trying to improve our Services, so they may change over time. We may suspend or discontinue any part of the Services, or we may introduce new features or impose limits on certain features or restrict access to parts or all of the Services. We’ll try to give you notice when we make a material change to the Services that would adversely affect you, but this isn’t always practical. We reserve the right to remove any Content from the Services at any time, for any reason (including, but not limited to, if someone alleges you contributed that Content in violation of these Terms), in our sole discretion, and without notice.
      </>
    ),
  },
  {
    title: 'Do the Services cost anything?',
    description: (
      <>
        The Services is currently free for your personal and non-commercial use. If you’ll use the Services on behalf of any entity or any third party, please contact us at <a href="mailto:contact@momentum-free.com">contact@momentum-free.com</a> for the enterprise customer license agreement. We reserve the right to require payment of fees for certain or all Services.
      </>
    ),
  },
  {
    title: 'What if I want to stop using the Services? ',
    description: (
      <>
        You’re free to do that at any time by contacting us at <a href="mailto:tos@momentum-free.com">TOS@momentum-free.com</a>; please refer to our <a href="/privacy-policy">Privacy Policy</a>, as well as the licenses above, to understand how we treat information you provide to us after you have stopped using our Services.  If you are an administrator, you may disconnect the Service from your server at any time.
      </>
    ),
  },
  {
    description: (
      <>
        Momentum Free is also free to terminate (or suspend access to) your use of the Services or your account for any reason in our discretion, including your breach of these Terms. Momentum Free has the sole right to decide whether you are in violation of any of the restrictions set forth in these Terms.
      </>
    ),
  },
  {
    description: (
      <>
        Account termination may result in destruction of any Content associated with your account, so keep that in mind before you decide to terminate your account.
      </>
    ),
  },
  {
    description: (
      <>
        If you have deleted your account by mistake, contact us immediately at <a href="mailto:tos@momentum-free.com">TOS@momentum-free.com</a> – we will try to help, but unfortunately, we can’t promise that we can recover or restore anything.
      </>
    ),
  },
  {

    description: (
      <>
        Provisions that, by their nature, should survive termination of these Terms shall survive termination. By way of example, all of the following will survive termination: any obligation you have to pay us or indemnify us, any limitations on our liability, any terms regarding ownership or intellectual property rights, and terms regarding disputes between us, including without limitation the arbitration agreement.
      </>
    ),
  },
  {
    title: 'What else do I need to know?',
    description: (
      <>
        <i>Warranty Disclaimer</i>. Momentum Free and its licensors, suppliers, partners, parent, subsidiaries or affiliated entities, and each of their respective officers, directors, members, employees, consultants, contract employees, representatives and agents, and each of their respective successors and assigns (Momentum Free and all such parties together, the “Momentum Free Parties”) make no representations or warranties concerning the Services, including without limitation regarding any Content contained in or accessed through the Services, and the Momentum Free Parties will not be responsible or liable for the accuracy, copyright compliance, legality, or decency of material contained in or accessed through the Services or any claims, actions, suits procedures, costs, expenses, damages or liabilities arising out of use of, or in any way related to your participation in, the Services. The Momentum Free Parties make no representations or warranties regarding suggestions or recommendations of services or products offered or purchased through or in connection with the Services. THE SERVICES AND CONTENT ARE PROVIDED BY MOMENTUM FREE (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS” BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Limitation of Liability</i>. TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL ANY OF THE MOMENTUM FREE PARTIES BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, (B) ANY SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) ONE-HUNDRED ($100) DOLLARS OR (II) THE AMOUNTS PAID AND/OR PAYABLE BY YOU TO MOMENTUM FREE IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTH PERIOD PRECEDING THIS APPLICABLE CLAIM OR (D) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL OR CERTAIN OTHER DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Indemnity</i>. You agree to indemnify and hold the Momentum Free Parties harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to any claims relating to (a) your use of the Services (including any actions taken by a Third-Party using your account), and (b) your violation of these Terms. In the event of such a claim, suit, or action (“Claim”), we will attempt to provide notice of the Claim to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).
      </>
    ),
  },
  {
    description: (
      <>
        <i>Assignment</i>. You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your Services account, in any way (by operation of law or otherwise) without Momentum Free’ prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations without consent.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Choice of Law</i>. These Terms are governed by and will be construed under the Federal Arbitration Act, applicable federal law, and the laws of the Republic of Portugal without regard to the conflicts of laws provisions thereof.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Arbitration Agreement</i>. Please read the following ARBITRATION AGREEMENT carefully because it requires you to arbitrate certain disputes and claims with Momentum Free and limits the manner in which you can seek relief from Momentum Free.Both you and Momentum Free acknowledge and agree that for the purposes of any dispute arising out of or relating to the subject matter of these Terms, Momentum Free’ officers, directors, employees and independent contractors(“Personnel”) are third - party beneficiaries of these Terms, and that upon your acceptance of these Terms, Personnel will have the right(and will be deemed to have accepted the right) to enforce these Terms against you as the third - party beneficiary hereof.
      </>
    ),
  },
  {
    description: (
      <>
        (a) <i>Arbitration Rules; Applicability of Arbitration Agreement</i>. The parties shall use their best efforts to settle any dispute, claim, question, or disagreement arising out of or relating to the subject matter of these Terms directly through good-faith negotiations, which shall be a precondition to either party initiating arbitration. If such negotiations do not resolve the dispute, it shall be finally settled by binding arbitration in Lisbon, Portugal. The arbitration will proceed in the English language, in accordance with the JAMS Streamlined Arbitration Rules and Procedures (the “Rules”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes. The arbitrator shall be selected from the appropriate list of JAMS arbitrators in accordance with such Rules. Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction.
      </>
    ),
  },
  {
    description: (
      <>
        (b) <i>Costs of Arbitration</i>. Momentum Free will not seek its attorneys’ fees and costs in arbitration unless the arbitrator determines that your claim is frivolous.
      </>
    ),
  },
  {
    description: (
      <>
        (c) <i>Small Claims Court; Infringement</i>. Either you or Momentum Free may assert claims, if they qualify, in small claims court in Lisbon, Portugal or any United States county where you live or work. Furthermore, notwithstanding the foregoing obligation to arbitrate disputes, each party shall have the right to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction, to prevent the actual or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets, patents or other intellectual property rights.
      </>
    ),
  },
  {
    description: (
      <>
        (d) <i>Waiver of Jury Trial</i>. YOU AND MOMENTUM FREE WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR JURY. You and Momentum Free are instead choosing to have claims and disputes resolved by arbitration. Arbitration procedures are typically more limited, more efficient, and less costly than rules applicable in court and are subject to very limited review by a court. In any litigation between you and Momentum Free over whether to vacate or enforce an arbitration award, YOU AND MOMENTUM FREE WAIVE ALL RIGHTS TO A JURY TRIAL, and elect instead to have the dispute be resolved by a judge.
      </>
    ),
  },
  {
    description: (
      <>
        (e) <i>Waiver of Class or Consolidated Actions</i>. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS. CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER. If however, this waiver of class or consolidated actions is deemed invalid or unenforceable, neither you nor Momentum Free is entitled to arbitration; instead all claims and disputes will be resolved in a court as set forth in (g) below.
      </>
    ),
  },
  {
    description: (
      <>
        (f) <i>Opt-out</i>. You have the right to opt out of the provisions of this Section by sending written notice of your decision to opt out to the email <a href="mailto:tos@momentum-free.com">TOS@momentum-free.com</a> within thirty (30) days of first accepting these Terms. You must include (i) your name (ii) the email address and/or telephone number associated with your account, and (iii) a clear statement that you want to opt out of these Terms’ arbitration agreement.
      </>
    ),
  },
  {
    description: (
      <>
        (g) <i>Exclusive Venue</i>. If you send the opt-out notice in (f), and/or in any circumstances where the foregoing arbitration agreement permits either you or Momentum Free to litigate any dispute arising out of or relating to the subject matter of these Terms in court, then the foregoing arbitration agreement will not apply to either party, and both you and Momentum Free agree that any judicial proceeding (other than small claims actions) will be brought in the state or federal courts located in, respectively, Lisbon, Portugal, or the federal district in which that county falls.
      </>
    ),
  },
  {
    description: (
      <>
        (h) <i>Severability</i>. If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration Agreement section will be null and void. This arbitration agreement will survive the termination of your relationship with Momentum Free.
      </>
    ),
  },
  {
    description: (
      <>
        <i>Miscellaneous</i>. You will be responsible for paying, withholding, filing, and reporting all taxes, duties, and other governmental assessments associated with your activity in connection with the Services, provided that the Momentum Free may, in its sole discretion, do any of the foregoing on your behalf or for itself as it sees fit. The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. If any provision of these Terms are found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable. You and Momentum Free agree that these Terms are the complete and exclusive statement of the mutual understanding between you and Momentum Free, and that these Terms supersede and cancel all previous written and oral agreements, communications and other understandings relating to the subject matter of these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of Momentum Free, and you do not have any authority of any kind to bind Momentum Free in any respect whatsoever.
      </>
    ),
  },
  {
    description: (
      <>
        Except as expressly set forth in the section above regarding the arbitration agreement, you and Momentum Free agree there are no third-party beneficiaries intended under these Terms.
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

export default function Terms() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Terms of Service</h1>
        {BlockList.map((props, idx) => (
          <Block key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
