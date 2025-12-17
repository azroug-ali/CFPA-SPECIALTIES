document.addEventListener('DOMContentLoaded', function() {
    initScrollNavigation();
    initSpecialtyModal();
});

function initScrollNavigation() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

const specialtiesData = {
    1: {
        title: "تربية الدواجن",
        image: "Photos/تربية الدواجن.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص عملي ومطلوب في سوق العمل، فإن تخصص تربية الدواجن يمنحك فرصة حقيقية لتعلّم مهنة مربحة يمكن ممارستها مباشرة بعد التكوين.</p><p>خلال هذا التكوين ستتعلّم:</p><ul><li>كيفية تربية دواجن اللحم والبيض بطريقة صحيحة</li><li>أسس التسيير وحساب التكاليف لتحقيق الربح</li><li>تنظيم الحظائر وضبط شروط التربية (الحرارة، التهوية، النظافة)</li></ul><br/><p/>"
         },              
    2: {
        title: "زراعة الخضروات",
        image: "Photos/زراعة الخضروات.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص عملي يفتح لك باب العمل مباشرة، فإن تخصص زراعة الخضروات يمنحك فرصة حقيقية لاكتساب مهارات فلاحية مطلوبة وقابلة للتطبيق في أي وقت.</p><p>خلال هذا التكوين ستتعلّم:</p><ul><li>أسس الزراعة وطرق المحاصيل والتعقيم</li><li>جني المحصول وتخزينه وتسويقه بطريقة مربحة</li><li>كيفية إعداد الأرض وتهيئتها للزراعة</li></ul><br/><p/>"
    },
    3: {
        title: "المشتلة",
        image: "Photos/المشتلة.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت ترغب في تعلّم مهنة فلاحية مطلوبة وسهلة الانطلاق، فإن تخصص المشتلة يمنحك مهارات عملية في إنتاج النباتات والأشجار بطريقة احترافية.</p><P>خلال هذا التكوين ستتعلّم:</p><ul><li>إعداد المشتلة وتنظيم فضاء الإنتاج</li><li>إنتاج شتلات الخضروات، الأشجار المثمرة ونباتات الزينة</li><li>تحضير الخلطات الترابية المناسبة لكل نوع</li></ul><br/><p/>"
    },
    4: {
        title: "التركيب الصحي",
        image: "Photos/التركيب الصحي.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص عملي وسريع الاندماج في سوق العمل، فإن تخصص التركيب الصحي يوفّر لك فرصة حقيقية لتعلّم مهنة مطلوبة في السكنات، الورشات، والمؤسسات.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>قراءة المخططات  الخاصة بالتركيب الصحي</li><li>تركيب شبكات المياه الباردة والساخنة</li><li>تثبيت الأدوات الصحية (مغاسل، مراحيض، سخانات…)</li></ul><br/><p/>"
    },
    5: {
        title: "كهرباء السيارات",
        image: "Photos/كهرباء السيارات.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تحب مجال السيارات وتبحث عن تخصص عملي يفتح لك باب العمل بسرعة، فإن تخصص كهرباء السيارات يمنحك مهارات تقنية مطلوبة في الورشات ومحطات الصيانة.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>أساسيات الكهرباء والإلكترونيات الخاصة بالسيارات</li><li>تشخيص أعطال الكهرباء في السيارات</li></ul><br/><p/>"
    },
    6: {
        title: "الكهرباء الصناعية",
        image: "Photos/كهرباء صناعية.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص تقني قوي ومطلوب في المصانع والورشات، فإن تخصص الكهرباء الصناعية يمنحك تكوينًا عمليًا يؤهلك للعمل مباشرة في المجال الصناعي.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>أساسيات الكهرباء والإلكترونيات الصناعية</li><li>تصدير وتركيب أنواع مختلفة من الكابلات</li><li>التعامل مع أنظمة التحكم و إصلاحها</li></ul><br/><p/>"
    },
    7: {
        title: "تركيب وصيانة أجهزة التبريد والتكييف",
        image: "Photos/التبرييد و التكييف.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص عملي يضمن لك طلبًا مستمرًا في سوق العمل، فإن تخصص تركيب وصيانة أجهزة التبريد والتكييف يمنحك مهارات تقنية مطلوبة في المنازل، المحلات، والمؤسسات.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>صيانة الثلاجات والمجمّدات</li><li>شحن غاز التبريد والتعامل الآمن معه</li><li>تركيب أجهزة التكييف المنزلي والتجاري</li></ul><br/><p/>"
    },
    8: {
        title: "الجزارة ومنتجات اللحوم",
        image: "Photos/الجزارة.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص مهني عملي يضمن لك عملًا دائمًا، فإن تخصص الجزارة ومنتجات اللحوم يمنحك مهارات مطلوبة في الأسواق، المحلات، والمذابح.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>تقنيات الذبح وفق الشروط الصحية</li><li>تقطيع اللحوم بطريقة صحيحة واحترافية</li><li>تحضير منتجات اللحوم (نقانق، كفتة، لحوم مفرومة…)</li></ul><br/><p/>"
    },
    9: {
        title: "العناية بالحدائق والمتنزهات",
        image: "Photos/العناية ب الح.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تحب الطبيعة والعمل في الهواء الطلق وتبحث عن تخصص عملي ومطلوب، فإن تخصص العناية بالحدائق والمتنزهات يمنحك مهارات مهنية في تهيئة وصيانة الفضاءات الخضراء.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>تهيئة وتصميم الحدائق والمساحات الخضراء</li><li>صيانة الحدائق والمتنزهات العمومية والخاصة</li><li>تقليم الأشجار والعناية بالعشب</li></ul><br/><p/>"
    },
    10: {
        title: "إنشاء مشاتل الأشجار",
        image: "Photos/إنشاء مشتلة.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تطمح إلى إنشاء مشروع فلاحي مربح ومستدام، فإن تخصص إنشاء مشتلة الأشجار يمنحك تكوينًا عمليًا يؤهلك لإنتاج شتلات عالية الجودة تلبي طلب السوق.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>اختيار الأنواع المناسبة للأشجار ووضعها في مكان الأمثل</li><li>العناية بالأشجار والمحافظة عليها من الأمراض والجراثيم</li><li>إكثار الأشجار (بالبذور، العقل، التطعيم)</li></ul><br/><p/>"
    },
    11: {
        title: "برنامج أكساس ACCESS",
        image: "Photos/أكساس.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>ذا كنت تبحث عن تخصص عملي ومفيد في المجال الإداري والمعلوماتي، فإن تخصص برنامج أكساس يمنحك مهارات قوية في إنشاء وإدارة قواعد البيانات المستعملة في المؤسسات، المكاتب، والمدارس.</p><P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>أساسيات قواعد البيانات وفهم طريقة عمل أكساس</li><li>إنشاء وتعديل قواعد البيانات</li><li>استخراج بيانات واستخدامها في تقارير</li></ul><br/><p/>"
    },
    12: {
        title: "صبغ الشعر وإزالة الصبغ وتجعيد الشعر",
        image: "Photos/حلاقة النساء.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنتِ مهتمًا بعالم التجميل وتبحثين عن تخصص عملي ومطلوب في صالونات الحلاقة والتجميل، فإن تخصص صبغ الشعر وإزالة الصبغ وتجعيد الشعر يمنحك مهارات تقنية وفنية تواكب أحدث الصيحات.</p><P>خلال هذا التكوين ستتعلّمين:</p><ul><li>أساسيات صبغ الشعر وطرائق تنفيذه</li><li>إزالة الصبغ وتصحيح الأخطاء اللونية</li><li>قنيات تجعيد وتمويج الشعر (الدائم والمؤقت)</li></ul><br/><p/>"
    },
    13: {
        title: "إنتاج النباتات ",
        image: "Photos/إنتاج النباتات.jpg",
        details: "<h4>وصف تفصيلي:</h4><p>إذا كنت تبحث عن تخصص عملي ومطلوب في السوق الفلاحي، فإن تخصص إنتاج النباتات يمنحك مهارات إنتاج نباتات صحية وجاهزة للبيع أو الاستخدام في الزراعة والبستنة.</P><P>خلال هذا التكوين ستتعلّم:</p><ul><li>أنواع النباتات المختلفة وخصائصها</li><li>اختيار نوع النباتات وتجهيز التربة المناسبة</li><li>الريّ والتسميد وفق احتياجات كل نبات</li></ul><br/><p/>"
    },
};

function initSpecialtyModal() {
    const modal = document.getElementById('specialtyModal');
    const closeBtn = document.querySelector('.close-button');
    const detailButtons = document.querySelectorAll('.btn-details');

    detailButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.specialty-card');
            const id = card.getAttribute('data-id');
            openModal(id);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', e => { if(e.target == modal) closeModal(); });
    document.addEventListener('keydown', e => { if(e.key==='Escape' && modal.style.display==='block') closeModal(); });
}

function openModal(id) {
    const data = specialtiesData[id];
    if(!data) return;

    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-details').innerHTML = data.details;
    document.getElementById('specialtyModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('specialtyModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}




const intro = document.getElementById('intro');
const width = window.innerWidth;
const height = window.innerHeight;

// إنشاء particle الألعاب النارية
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('firework-particle');
    document.body.appendChild(particle);

    const hue = Math.floor(Math.random() * 360);
    particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    const angle = Math.random() * 2 * Math.PI;
    const distance = 100 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

    setTimeout(() => {
        particle.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;
        particle.style.opacity = 0;
    }, 50);

    setTimeout(() => particle.remove(), 1100);
}

// إطلاق الألعاب النارية من جميع الأطراف
function launchFireworks(intensity = 30) {
    for (let i = 0; i < intensity; i++) {
        const edge = Math.floor(Math.random() * 4);
        let x, y;
        switch(edge) {
            case 0: x = Math.random() * width; y = 0; break; // أعلى
            case 1: x = Math.random() * width; y = height; break; // أسفل
            case 2: x = 0; y = Math.random() * height; break; // يسار
            case 3: x = width; y = Math.random() * height; break; // يمين
        }
        createParticle(x, y);
    }
}

