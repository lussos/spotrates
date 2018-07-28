export default function addRow() {
  var addBtn = $('.tbody .add-row'),
    row = `<ul>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li contenteditable="true"></li>
      <li>
        <label class="checkbox">
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <svg class="icon-logout">
          <use xlink:href="fonts/icons.svg#icon-trash"></use>
        </svg>
      </li>
    </ul>`;

  addBtn.on('click', function () {
    $(row).insertBefore(addBtn);
  });
}