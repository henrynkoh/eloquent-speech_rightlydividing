import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appendix: Rightly Dividing - Kingdom Gospel vs. Grace Gospel | Leadership Communication Mastery',
  description: 'Understanding the distinction between Kingdom Gospel (circumcised) and Grace Gospel (uncircumcised) through rightly dividing the words of truth.',
};

export default function AppendixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Appendix: Rightly Dividing the Words of Truth
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-2">
            Kingdom Gospel vs. Grace Gospel
          </p>
          <p className="text-lg text-gray-600 italic">
            "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
          </p>
          <p className="text-sm text-gray-500 mt-1">— 2 Timothy 2:15 (KJV)</p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Foundation of Rightly Dividing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To speak truth with confidence and authority, we must first understand truth itself. The Bible contains two distinct programs, 
            two different gospels, and two separate groups of people. Rightly dividing means recognizing these distinctions clearly, 
            without mixing what applies to one with what applies to the other.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This appendix provides a comprehensive examination of the Kingdom Gospel (given to the circumcised, Israel) and the Grace Gospel 
            (given to the uncircumcised, the Body of Christ). Understanding this division is essential for speaking truth with clarity and conviction.
          </p>
        </section>

        {/* Two Gospels Overview */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Distinct Gospels</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Kingdom Gospel */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kingdom Gospel</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Started:</strong> With Moses' law</p>
                <p><strong>Ended:</strong> Until John the Baptist</p>
                <p><strong>Apostle:</strong> Peter (Apostle of the Circumcised)</p>
                <p><strong>Audience:</strong> Israel (할례자 - Circumcised)</p>
                <p><strong>Message:</strong> "Repent, and be baptized... for the remission of sins"</p>
                <p className="text-sm italic text-gray-600">Acts 2:38</p>
              </div>
            </div>

            {/* Grace Gospel */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grace Gospel</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Started:</strong> When Jesus declared "It is finished" on the Cross</p>
                <p><strong>Ends:</strong> Until the 2nd Coming of Jesus Christ</p>
                <p><strong>Apostle:</strong> Paul (Apostle of the Uncircumcised)</p>
                <p><strong>Audience:</strong> Gentiles (무할례자 - Uncircumcised)</p>
                <p><strong>Message:</strong> "Believe that Christ died, was buried, and rose again"</p>
                <p className="text-sm italic text-gray-600">1 Corinthians 15:3-4</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Law Cannot Save */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Law Cannot Save: No Flesh Justified by the Law</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin."
            </p>
            <p className="text-right text-gray-600">— Romans 3:20 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The law was never given as a means of salvation. Its purpose was to reveal sin, to show humanity that we cannot keep God's perfect standard. 
            The apostle Paul makes this clear throughout his epistles.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:10 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:11 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:21 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            <strong>Why then would anyone require law-keeping from Gentile Christians when even Israel's forefathers could not keep it?</strong> 
            This is the question Paul addresses throughout his ministry. The law was given to Israel, and even they could not fulfill it. 
            How much more foolish it is to impose law-keeping on Gentiles who were never under the law to begin with.
          </p>
        </section>

        {/* Purpose of the Law */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Purpose of the Law: To Reveal Sin, Not to Save</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith."
            </p>
            <p className="text-right text-gray-600">— Galatians 3:24 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The law served as a tutor, a schoolmaster, to lead us to Christ. Once we come to Christ by faith, we are no longer under that tutor.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But after that faith is come, we are no longer under a schoolmaster."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:25 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For by the law is the knowledge of sin."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:20 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 7:7 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Abraham Justified by Grace Before the Law */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Abraham: Justified by Grace Before the Law</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Even before Moses received the law, Abraham was justified by grace through faith. This proves that salvation has always been by grace, 
            not by law-keeping.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness."
            </p>
            <p className="text-right text-gray-600">— Romans 4:3 (KJV)</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Now to him that worketh is the reward not reckoned of grace, but of debt. But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:4-5 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the law, but through the righteousness of faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Therefore it is of faith, that it might be by grace; to the end the promise might be sure to all the seed; not to that only which is of the law, but to that also which is of the faith of Abraham; who is the father of us all."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:16 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Abraham lived before the law was given. Yet he was justified by faith, not by works. This demonstrates that salvation has always been 
            by grace through faith, even before the law existed. Now, in this age of grace, all people are justified by God's grace in the same way.
          </p>
        </section>

        {/* Salvation by Faith, Not Works */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Salvation by Faith: Whosoever Believeth</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
            </p>
            <p className="text-right text-gray-600">— Ephesians 2:8-9 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Salvation is not achieved through human effort or good works. It is received by faith in Jesus Christ. Works are the fruit of salvation, 
            not the root. They flow from gratitude for the grace we have received, not as a means to earn what we cannot earn.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For whosoever shall call upon the name of the Lord shall be saved."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:9 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:5 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Therefore we conclude that a man is justified by faith without the deeds of the law."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:28 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:16 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Works as Fruit, Not Root */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Works: The Fruit of Grace, Not the Root of Salvation</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Good works are not the means to salvation; they are the evidence of it. They flow from a heart filled with gratitude for the grace 
            we have received. We do not work to be saved; we work because we are saved.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Ephesians 2:10 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:6 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:20 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Works done in gratitude for grace are beautiful and pleasing to God. But works done to earn salvation are worthless, 
            for salvation cannot be earned. It is a gift received by faith.
          </p>
        </section>

        {/* Peter and Paul: Two Apostles, Two Gospels */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Apostles, Two Gospels</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Peter */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peter: Apostle of the Circumcised (할례자)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">"And when James, Cephas, and John, who seemed to be pillars, perceived the grace that was given unto me, they gave to me and Barnabas the right hands of fellowship; that we should go unto the heathen, and they unto the circumcision."</p>
                  <p className="text-xs text-gray-600 text-right">— Galatians 2:9 (KJV)</p>
                </div>
                <p><strong>Audience:</strong> Israel (Circumcised)</p>
                <p><strong>Message:</strong> "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins"</p>
                <p className="text-sm italic text-gray-600">Acts 2:38</p>
                <p><strong>Kingdom Gospel:</strong> For Israel, pointing to the coming Kingdom on earth</p>
              </div>
            </div>

            {/* Paul */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paul: Apostle of the Uncircumcised (무할례자)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">"For I speak to you Gentiles, inasmuch as I am the apostle of the Gentiles, I magnify mine office."</p>
                  <p className="text-xs text-gray-600 text-right">— Romans 11:13 (KJV)</p>
                </div>
                <p><strong>Audience:</strong> Gentiles (Uncircumcised)</p>
                <p><strong>Message:</strong> "That Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day"</p>
                <p className="text-sm italic text-gray-600">1 Corinthians 15:3-4</p>
                <p><strong>Grace Gospel:</strong> For the Body of Christ, the mystery revealed</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter."
            </p>
            <p className="text-right text-gray-600">— Galatians 2:7 (KJV)</p>
          </div>
        </section>

        {/* Only One Gospel for Today */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Only One Gospel for Today: The Grace Gospel</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For other foundation can no man lay than that is laid, which is Jesus Christ. Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest."
            </p>
            <p className="text-right text-gray-600">— 1 Corinthians 3:11-13 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            There is only one foundation: Jesus Christ. And there is only one gospel for today: the grace gospel that Paul was given to preach. 
            This is the gospel we must believe and proclaim.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:11-12 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:8 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"As we said before, so say I now again, If any man preach any other gospel unto you than that ye have received, let him be accursed."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:9 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 16:25 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Beware of False Gospels */}
        <section className="bg-red-50 rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Beware: False Gospels Seek to Trouble You</h2>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ."
            </p>
            <p className="text-right text-gray-600">— Galatians 1:6-7 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            There are those who would trouble you with false gospels, mixing law with grace, requiring works for salvation, or adding conditions 
            to the free gift of God. Do not be deceived.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:1 (KJV)</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For if ye be led of the Spirit, ye are not under the law."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:18 (KJV)</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:4 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Timeline of the Two Gospels */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Timeline: When Each Gospel Began and Ends</h2>
          
          <div className="space-y-6">
            {/* Kingdom Gospel Timeline */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kingdom Gospel Timeline</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Started: With Moses' Law</p>
                  <p className="text-gray-700 mb-1">"The law was given by Moses, but grace and truth came by Jesus Christ."</p>
                  <p className="text-sm text-gray-600 text-right">— John 1:17 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Ended: Until John the Baptist</p>
                  <p className="text-gray-700 mb-1">"The law and the prophets were until John: since that time the kingdom of God is preached, and every man presseth into it."</p>
                  <p className="text-sm text-gray-600 text-right">— Luke 16:16 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">"For all the prophets and the law prophesied until John."</p>
                  <p className="text-sm text-gray-600 text-right">— Matthew 11:13 (KJV)</p>
                </div>
              </div>
            </div>

            {/* Grace Gospel Timeline */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grace Gospel Timeline</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Started: When Jesus Declared "It is Finished"</p>
                  <p className="text-gray-700 mb-1">"When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost."</p>
                  <p className="text-sm text-gray-600 text-right">— John 19:30 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Revealed to: Paul</p>
                  <p className="text-gray-700 mb-1">"How that by revelation he made known unto me the mystery; (as I wrote afore in few words, Whereby, when ye read, ye may understand my knowledge in the mystery of Christ) Which in other ages was not made known unto the sons of men, as it is now revealed unto his holy apostles and prophets by the Spirit."</p>
                  <p className="text-sm text-gray-600 text-right">— Ephesians 3:3-5 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Ends: Until the 2nd Coming of Jesus Christ</p>
                  <p className="text-gray-700 mb-1">"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."</p>
                  <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 4:16-17 (KJV)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Key Verses */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Key Verses: Rightly Dividing Truth</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For sin shall not have dominion over you: for ye are not under the law, but under grace."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 6:14 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 8:1 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 8:2 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For Christ is the end of the law for righteousness to every one that believeth."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:4 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Colossians 2:14 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Colossians 2:16-17 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the law having a shadow of good things to come, and not the very image of the things, can never with those sacrifices which they offered year by year continually make the comers thereunto perfect."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Hebrews 10:1 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Hebrews 8:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:21-22 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the law, but through the righteousness of faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:13 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Conclusion: Rightly Dividing for Clear Communication</h2>
          <p className="text-lg leading-relaxed mb-4">
            Understanding the distinction between the Kingdom Gospel and the Grace Gospel is essential for speaking truth with clarity and conviction. 
            When you rightly divide the word of truth, you understand:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
            <li>The law cannot save; it reveals sin</li>
            <li>Salvation is by grace through faith, not by works</li>
            <li>Abraham was justified by grace before the law existed</li>
            <li>Works are the fruit of salvation, not the root</li>
            <li>Peter preached to the circumcised (Israel); Paul to the uncircumcised (Gentiles)</li>
            <li>There is only one gospel for today: the grace gospel Paul received by revelation</li>
            <li>Beware of false gospels that mix law with grace</li>
          </ul>
          <p className="text-lg leading-relaxed">
            When you understand these distinctions, you speak with authority that comes from knowing truth itself. You're not seeking approval 
            through performance; you're speaking from a place of being already approved by God's grace. This is the foundation of eloquent, 
            confident communication.
          </p>
          <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
            <p className="text-xl italic mb-2">
              "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
            </p>
            <p className="text-right">— 2 Timothy 2:15 (KJV)</p>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
          <Link
            href="/lesson/1"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Start Day 1 →
          </Link>
        </div>
      </main>
    </div>
  );
}

