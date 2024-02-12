import Inputmask from "inputmask";
import { validateEmail, validateMessage, validateName, validatePhone } from "./validateForm";
import { apiClient } from "./apiClient";

export function createForm() {
  const app = document.createElement('div');
  const form = document.createElement('form');
  const name = document.createElement('input');
  const email = document.createElement('input');
  const phone = document.createElement('input');
  const message = document.createElement('textarea');
  const labelName = document.createElement('label');
  const labelEmail = document.createElement('label');
  const labelPhone = document.createElement('label');
  const labelMessage = document.createElement('label');
  const descrName = document.createElement('p');
  const descrEmail = document.createElement('p');
  const descrPhone = document.createElement('p');
  const descrMessage = document.createElement('p');
  const errorName = document.createElement('p');
  const errorEmail = document.createElement('p');
  const errorPhone = document.createElement('p');
  const errorMessage = document.createElement('p');
  const btn = document.createElement('button');
  const divError = document.createElement('div');
  const spanError = document.createElement('span')
  const btnModal = document.createElement('button')
  const blockBtn = document.createElement('div')
  const divFoot = document.createElement('div');
  const test = document.createElement('div')

  form.classList.add('form');
  name.classList.add('form__name-label');
  email.classList.add('form__email-label');
  phone.classList.add('form__phone-label');
  message.classList.add('form__message-label');
  btn.classList.add('form__btn', 'btn-reset');
  divError.classList.add('form__error');
  spanError.classList.add('form__error-span')
  divFoot.classList.add('form__block')
  blockBtn.classList.add('form__block-btn')

  btnModal.classList.add('form__block-modal', 'btn-reset')
  const modal = document.createElement('div');
  const modalBox = document.createElement('div');

  modal.classList.add('modal', 'side-modal', 'active-modal');
  modalBox.classList.add('modal__box', 'active-modal');

  labelName.classList.add('form__label')
  labelEmail.classList.add('form__label')
  labelPhone.classList.add('form__label')
  labelMessage.classList.add('form__label')

  descrName.classList.add('form__descr')
  descrEmail.classList.add('form__descr')
  descrPhone.classList.add('form__descr')
  descrMessage.classList.add('form__descr')

  errorName.classList.add('form__error-label')
  errorEmail.classList.add('form__error-label')
  errorPhone.classList.add('form__error-label')
  errorMessage.classList.add('form__error-label')

  name.placeholder = 'Введите имя'
  email.placeholder = 'Введите Email'
  phone.placeholder = 'Введите телефон'
  message.placeholder = 'Введите сообщение'

  app.id = 'app'
  phone.id = 'idPhone'
  name.id = 'idName'
  email.id = 'idEmail'
  message.id = 'idMess'
  errorName.id = 'errName'
  errorEmail.id = 'errEmail'
  errorPhone.id = 'errPhone'
  errorMessage.id = 'errMess'
  btn.id = 'idBtn'
  spanError.id = 'idError'

  email.type = 'email';

  btn.textContent = 'Отправить'
  descrName.textContent = 'Имя'
  descrEmail.textContent = 'Email'
  descrPhone.textContent = 'Телефон'
  descrMessage.textContent = 'Комментарий'
  btnModal.textContent = 'Pop-Up'
  modalBox.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, laudantium. Molestiae libero veritatis quia odio. Architecto est consectetur optio laboriosam?';
  test.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat perferendis optio commodi ratione deserunt laboriosam aliquid ut, provident sequi deleniti pariatur vel dolores iusto cum a, nisi velit explicabo dolore? Ducimus quaerat exercitationem, quas alias dolorem veritatis quia amet eligendi adipisci ipsam ullam delectus, placeat sapiente quidem dolorum? Quaerat, totam quod. Tenetur quo voluptatum, odio facere ducimus vitae at nam ipsam maiores pariatur? Exercitationem dicta, recusandae nulla nisi velit corporis delectus? Culpa explicabo voluptatem nulla quam voluptate rem quaerat a. Deserunt, repellat dolorem. Eaque, quia ab neque doloribus quas obcaecati soluta deserunt inventore nostrum magnam minus tempore voluptatibus sequi ex fugiat corporis! Beatae, tenetur est, dolore omnis consectetur asperiores illo modi inventore placeat reprehenderit ad culpa aspernatur repudiandae ullam dolores commodi architecto doloribus consequatur cum! Incidunt atque laborum error minus, iusto similique autem voluptate ut est exercitationem ad perspiciatis aliquid veniam magnam labore cumque, vel illo! Eos similique dolore iure vero optio architecto laudantium suscipit aliquid? Perspiciatis nesciunt reprehenderit sint aliquam corrupti iste inventore corporis minus reiciendis praesentium. Ratione reiciendis quae atque quos! Minima tempora culpa ducimus, blanditiis doloribus accusamus numquam, vel nobis voluptatum pariatur error non ex animi aliquam quaerat, cupiditate omnis cumque consequatur porro amet soluta hic quae? Ex, nam sint dolorum minima inventore nostrum minus architecto deserunt. Et enim impedit neque harum, autem ipsa id, quos expedita quod voluptate, omnis vitae tempora fugit assumenda! Quo dolore iste inventore debitis maxime suscipit hic fuga pariatur modi, accusantium nobis molestiae blanditiis expedita fugit quod nam velit dolor fugiat optio magni explicabo recusandae? Ut animi totam magnam fugiat dolorem eaque non dicta! Sint natus officiis commodi ipsum incidunt consectetur dolor sapiente esse. Voluptatum beatae eum autem, pariatur enim quas est culpa non tenetur explicabo accusantium illo, alias voluptatem mollitia ut! Libero aperiam quibusdam optio vitae accusamus quam asperiores, adipisci deleniti autem, quaerat eum fuga quo commodi nihil rem omnis incidunt consequuntur ex rerum, veritatis excepturi. Nam rerum aspernatur dignissimos ullam error, corporis blanditiis numquam sunt reprehenderit deserunt animi, minima dolore quaerat debitis voluptas natus tempore. Repellendus, reprehenderit, est provident doloremque corporis ea architecto, repudiandae asperiores nemo porro natus recusandae inventore! Maxime nostrum laboriosam asperiores ducimus repellat quisquam ab reiciendis soluta esse ut provident magni, a, incidunt nam aliquid illo voluptatem recusandae veritatis dolorem temporibus ipsum in? Sit accusamus aut tenetur eaque aliquid voluptatem laudantium, ipsam dolore odio omnis. Doloremque, vero? Voluptates quisquam saepe iure animi voluptate deserunt provident numquam odio modi dolorum, quis accusamus sint asperiores corrupti dignissimos optio doloremque magnam expedita excepturi. Voluptates ad explicabo saepe, sequi dolorum incidunt beatae soluta atque reiciendis consequuntur vel nam qui numquam amet error? Sint, necessitatibus exercitationem. Odio harum facere, deleniti repellendus praesentium quod ipsam, nostrum consectetur minima dicta quis autem sunt accusantium quo doloremque, fugit rem? Repellat numquam, quis sit ea debitis ipsum natus quasi aliquid mollitia qui, vitae quaerat. Minima harum cumque quos quibusdam. Facere tempore eum repudiandae eius sequi libero, mollitia suscipit consequatur nemo porro doloremque ipsam officiis at hic atque dignissimos vel! Ratione vel voluptatibus nostrum exercitationem, cupiditate eaque aut, officiis ad molestias iusto soluta! Distinctio dicta ut quos numquam necessitatibus saepe temporibus minus mollitia architecto consequuntur explicabo nesciunt, consectetur debitis possimus rerum optio corporis. Assumenda obcaecati laborum cum quibusdam unde vel accusantium modi expedita quaerat accusamus. Numquam quae, repellat expedita quaerat eum esse molestias eaque amet enim, tempore eveniet velit eligendi. Cum hic nostrum voluptas, tempora possimus voluptate nisi dolorem corrupti fugit similique explicabo incidunt id quae officia amet, totam numquam veniam quaerat eos laudantium doloremque. Necessitatibus error autem nostrum? Assumenda odit unde a, consequatur alias nihil eligendi in animi, facilis non maxime voluptatum beatae molestias corporis fuga accusamus vel corrupti sequi! Repellat vel neque dolores non voluptatum modi voluptatem qui eius veritatis consequatur repudiandae dolor voluptatibus, nihil accusamus praesentium, provident nemo impedit id tempore reprehenderit. Quos ex odit asperiores distinctio numquam optio nulla iste cumque corrupti suscipit voluptatum exercitationem, accusamus modi, hic nobis eos nisi, iusto pariatur possimus nesciunt? Eum porro veniam et animi accusantium sunt dolores! Impedit dolores maxime cum! Praesentium consectetur veritatis beatae labore dignissimos obcaecati incidunt voluptatibus. Magnam modi dolores nesciunt reprehenderit mollitia minima nulla debitis illo, ipsum dolore aperiam quod excepturi nisi consequuntur tempora neque perferendis temporibus magni sunt repudiandae! Incidunt nisi molestias iste quibusdam unde voluptas a non. Praesentium quos, sapiente ut assumenda perspiciatis culpa, minus quibusdam fugit consectetur qui quas harum voluptatibus magni neque velit. Beatae, provident aliquid debitis porro esse quos unde. Voluptatum nostrum amet assumenda vitae similique. Possimus rerum deleniti nihil optio, qui perspiciatis alias voluptate molestias error. Deleniti tempore suscipit blanditiis similique error exercitationem cupiditate, enim sit porro hic quo aut aperiam nemo illo quibusdam, vero repudiandae fugiat! Asperiores, ea? Rem aut repellendus consequuntur itaque rerum numquam, laborum quibusdam eius quaerat minus at consectetur quod perferendis distinctio sunt vero hic possimus cumque non? Facere nemo veritatis consectetur tempore eaque maiores, possimus excepturi minima deleniti accusamus architecto debitis ad aspernatur ut sed sit reprehenderit ex molestiae sunt non ducimus. Corporis iure doloribus harum eaque atque dicta veniam labore excepturi. Quaerat inventore est quod reiciendis qui itaque autem cumque voluptas iste vel? Nobis perferendis ab totam odio ipsam? Ut vitae minima at quis tempore nemo sed fugiat iure a dolorem animi, saepe cupiditate molestiae quo atque nihil voluptate sint. Possimus suscipit molestias, eligendi officiis quam sequi fugiat minus qui omnis dolor voluptatum quia commodi? Suscipit possimus voluptatum nulla cupiditate voluptate eos illum numquam quod. Consequuntur itaque suscipit sequi ad sed iusto ullam aliquid porro, quo temporibus amet natus unde quam vitae aspernatur dolorem quod modi beatae sit facilis aperiam! Adipisci accusamus modi doloremque officia provident animi id inventore? Odio, sit illum reiciendis, culpa cum amet rerum modi error non dicta, hic dolor. Quaerat in illum sequi autem ratione facere explicabo maiores modi, vitae ipsam quam, fugit, voluptates perferendis dolorem facilis ducimus obcaecati nemo! Aliquam reiciendis placeat cumque corrupti nam ipsum? Id consequatur, sunt reprehenderit vitae saepe quasi sequi qui cum incidunt nulla assumenda et earum magni ipsum deserunt in quibusdam! Minus, fugiat earum! Distinctio illum molestiae veniam totam odit!'
  btn.disabled = true

  window.document.body.append(app)
  app.append(form, btnModal, test);

  modal.append(modalBox);

  labelName.append(descrName, name, errorName);
  labelEmail.append(descrEmail, email, errorEmail);
  labelPhone.append(descrPhone, phone, errorPhone);
  labelMessage.append(descrMessage, message, errorMessage)
  divError.append(spanError)
  divFoot.append(btn, divError)
  form.append(labelName, labelEmail, labelPhone, labelMessage, divFoot);

  Inputmask({
    mask: "+375 (99) 999-99-99"
  }).mask(phone);

  let validName = false;
  let validEmail = false;
  let validPhone = false;
  let validMess = false;

  function onActive() {
    if(validName && validEmail && validPhone && validMess) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }

  name.addEventListener('blur', () => {
    const isValidName = validateName(name, errorName)
    if(isValidName === true) {
      validName = !validName
    }
    onActive()
  })

  email.addEventListener('blur', () => {
    const isValidEmail = validateEmail(email, errorEmail)
    if(isValidEmail === true) {
      validEmail = !validEmail
    }
    onActive()
  })

  message.addEventListener('blur', () => {
    const isValidMess = validateMessage(message, errorMessage)
    if(isValidMess === true) {
      validMess = !validMess
    }
    onActive()
  })

  phone.addEventListener('blur', () => {
    const isValidPhone = validatePhone(phone, errorPhone)
    if(isValidPhone === true) {
      validPhone = !validPhone
    }
    onActive()
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
      firstName: name.value,
      newEmail: email.value,
      newPhone: phone.value,
      newMess: message.value,
    }
    apiClient(data)
  })

  btnModal.addEventListener('click', () => {
    document.body.append(modal)
    document.body.style.overflow = 'hidden'
  })

  document.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.remove();//закрытие модалки вне её окна
        document.body.style.overflow = 'auto'
    }
});
}
