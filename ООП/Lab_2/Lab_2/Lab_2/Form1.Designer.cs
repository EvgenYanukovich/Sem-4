namespace Lab_2
{
    partial class Airport
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            textBoxID = new TextBox();
            ID = new Label();
            Model = new Label();
            crew = new Label();
            CountOfSeating = new Label();
            yearOfIssue = new Label();
            labelCarrying = new Label();
            DateOfService = new Label();
            listBoxType = new ListBox();
            textBoxCarrying = new TextBox();
            dateOfServiceChoose = new DateTimePicker();
            ConfirmTheCorrect = new CheckBox();
            dateOfIssueChoose = new DateTimePicker();
            textBoxCountOfSeat = new TextBox();
            TypeOfPlane = new Label();
            chooseButton = new Button();
            serialize = new Button();
            deserialize = new Button();
            comboBoxModel = new ComboBox();
            airportText = new Label();
            buttonSave = new Button();
            buttonClear = new Button();
            FillWithInf = new TextBox();
            filling = new Label();
            barFilling = new ProgressBar();
            SuspendLayout();
            // 
            // textBoxID
            // 
            textBoxID.Location = new Point(86, 40);
            textBoxID.Margin = new Padding(2);
            textBoxID.Name = "textBoxID";
            textBoxID.Size = new Size(121, 27);
            textBoxID.TabIndex = 0;
            textBoxID.TextChanged += textBoxID_TextChanged;
            textBoxID.Leave += textBoxID_Leave;
            // 
            // ID
            // 
            ID.Location = new Point(10, 42);
            ID.Margin = new Padding(2, 0, 2, 0);
            ID.Name = "ID";
            ID.Size = new Size(70, 22);
            ID.TabIndex = 1;
            ID.Text = "ID:";
            // 
            // Model
            // 
            Model.Location = new Point(10, 77);
            Model.Margin = new Padding(2, 0, 2, 0);
            Model.Name = "Model";
            Model.Size = new Size(70, 22);
            Model.TabIndex = 2;
            Model.Text = "Модель:";
            // 
            // crew
            // 
            crew.Location = new Point(10, 109);
            crew.Margin = new Padding(2, 0, 2, 0);
            crew.Name = "crew";
            crew.Size = new Size(70, 22);
            crew.TabIndex = 3;
            crew.Text = "Экипаж:";
            // 
            // CountOfSeating
            // 
            CountOfSeating.Location = new Point(10, 144);
            CountOfSeating.Margin = new Padding(2, 0, 2, 0);
            CountOfSeating.Name = "CountOfSeating";
            CountOfSeating.Size = new Size(210, 22);
            CountOfSeating.TabIndex = 4;
            CountOfSeating.Text = "Количество посадочных мест:";
            // 
            // yearOfIssue
            // 
            yearOfIssue.Location = new Point(10, 178);
            yearOfIssue.Margin = new Padding(2, 0, 2, 0);
            yearOfIssue.Name = "yearOfIssue";
            yearOfIssue.Size = new Size(210, 22);
            yearOfIssue.TabIndex = 5;
            yearOfIssue.Text = "Год выпуска:";
            // 
            // labelCarrying
            // 
            labelCarrying.Location = new Point(10, 212);
            labelCarrying.Margin = new Padding(2, 0, 2, 0);
            labelCarrying.Name = "labelCarrying";
            labelCarrying.Size = new Size(139, 22);
            labelCarrying.TabIndex = 6;
            labelCarrying.Text = "Грузоподъёмность:";
            // 
            // DateOfService
            // 
            DateOfService.Location = new Point(10, 246);
            DateOfService.Margin = new Padding(2, 0, 2, 0);
            DateOfService.Name = "DateOfService";
            DateOfService.Size = new Size(210, 22);
            DateOfService.TabIndex = 7;
            DateOfService.Text = "Дата тех. обслуживания:";
            // 
            // listBoxType
            // 
            listBoxType.FormattingEnabled = true;
            listBoxType.ItemHeight = 20;
            listBoxType.Items.AddRange(new object[] { "Пассажирский", "Грузовой", "Военный" });
            listBoxType.Location = new Point(123, 282);
            listBoxType.Margin = new Padding(2);
            listBoxType.Name = "listBoxType";
            listBoxType.Size = new Size(145, 24);
            listBoxType.TabIndex = 9;
            listBoxType.SelectedIndexChanged += listBoxType_SelectedIndexChanged;
            // 
            // textBoxCarrying
            // 
            textBoxCarrying.Location = new Point(154, 210);
            textBoxCarrying.Margin = new Padding(2);
            textBoxCarrying.Name = "textBoxCarrying";
            textBoxCarrying.Size = new Size(80, 27);
            textBoxCarrying.TabIndex = 11;
            textBoxCarrying.TextChanged += textBoxCarrying_TextChanged;
            textBoxCarrying.Leave += textBoxCarrying_Leave;
            // 
            // dateOfServiceChoose
            // 
            dateOfServiceChoose.Location = new Point(182, 243);
            dateOfServiceChoose.Margin = new Padding(2);
            dateOfServiceChoose.Name = "dateOfServiceChoose";
            dateOfServiceChoose.Size = new Size(157, 27);
            dateOfServiceChoose.TabIndex = 13;
            dateOfServiceChoose.ValueChanged += dateOfServiceChoose_ValueChanged;
            dateOfServiceChoose.Leave += dateOfServiceChoose_Leave;
            // 
            // ConfirmTheCorrect
            // 
            ConfirmTheCorrect.AutoSize = true;
            ConfirmTheCorrect.Location = new Point(10, 320);
            ConfirmTheCorrect.Margin = new Padding(2);
            ConfirmTheCorrect.Name = "ConfirmTheCorrect";
            ConfirmTheCorrect.Size = new Size(367, 24);
            ConfirmTheCorrect.TabIndex = 14;
            ConfirmTheCorrect.Text = "Подтверждаю правильность введённых данных";
            ConfirmTheCorrect.UseVisualStyleBackColor = true;
            ConfirmTheCorrect.CheckedChanged += ConfirmTheCorrect_CheckedChanged;
            // 
            // dateOfIssueChoose
            // 
            dateOfIssueChoose.Location = new Point(109, 176);
            dateOfIssueChoose.Margin = new Padding(2);
            dateOfIssueChoose.Name = "dateOfIssueChoose";
            dateOfIssueChoose.Size = new Size(152, 27);
            dateOfIssueChoose.TabIndex = 16;
            dateOfIssueChoose.ValueChanged += dateOfIssueChoose_ValueChanged;
            dateOfIssueChoose.Leave += dateOfIssueChoose_Leave;
            // 
            // textBoxCountOfSeat
            // 
            textBoxCountOfSeat.Location = new Point(218, 142);
            textBoxCountOfSeat.Margin = new Padding(2);
            textBoxCountOfSeat.Name = "textBoxCountOfSeat";
            textBoxCountOfSeat.Size = new Size(78, 27);
            textBoxCountOfSeat.TabIndex = 17;
            textBoxCountOfSeat.TextChanged += textBoxCountOfSeat_TextChanged;
            textBoxCountOfSeat.Leave += textBoxCountOfSeat_Leave;
            // 
            // TypeOfPlane
            // 
            TypeOfPlane.Location = new Point(10, 282);
            TypeOfPlane.Margin = new Padding(2, 0, 2, 0);
            TypeOfPlane.Name = "TypeOfPlane";
            TypeOfPlane.Size = new Size(108, 22);
            TypeOfPlane.TabIndex = 18;
            TypeOfPlane.Text = "Тип самолёта:";
            // 
            // chooseButton
            // 
            chooseButton.Location = new Point(86, 105);
            chooseButton.Margin = new Padding(2);
            chooseButton.Name = "chooseButton";
            chooseButton.Size = new Size(148, 27);
            chooseButton.TabIndex = 19;
            chooseButton.Text = "Выбор экипажа";
            chooseButton.UseVisualStyleBackColor = true;
            chooseButton.Click += chooseButton_Click;
            // 
            // serialize
            // 
            serialize.Cursor = Cursors.Hand;
            serialize.Location = new Point(496, 348);
            serialize.Margin = new Padding(2);
            serialize.Name = "serialize";
            serialize.Size = new Size(133, 27);
            serialize.TabIndex = 24;
            serialize.Text = "Сериализация";
            serialize.UseVisualStyleBackColor = true;
            serialize.Click += serialize_Click;
            // 
            // deserialize
            // 
            deserialize.Cursor = Cursors.Hand;
            deserialize.Location = new Point(644, 348);
            deserialize.Margin = new Padding(2);
            deserialize.Name = "deserialize";
            deserialize.Size = new Size(133, 27);
            deserialize.TabIndex = 25;
            deserialize.Text = "Десериализация";
            deserialize.UseVisualStyleBackColor = true;
            deserialize.Click += deserialize_Click;
            // 
            // comboBoxModel
            // 
            comboBoxModel.FormattingEnabled = true;
            comboBoxModel.Items.AddRange(new object[] { "Boeing ", "Airbus", "Embraer", "CRJ" });
            comboBoxModel.Location = new Point(86, 74);
            comboBoxModel.Margin = new Padding(2);
            comboBoxModel.Name = "comboBoxModel";
            comboBoxModel.Size = new Size(135, 28);
            comboBoxModel.TabIndex = 26;
            comboBoxModel.SelectedIndexChanged += comboBoxModel_SelectedIndexChanged;
            comboBoxModel.Leave += comboBoxModel_Leave;
            // 
            // airportText
            // 
            airportText.Font = new Font("Magneto", 12F, FontStyle.Bold, GraphicsUnit.Point);
            airportText.Location = new Point(10, 7);
            airportText.Margin = new Padding(2, 0, 2, 0);
            airportText.Name = "airportText";
            airportText.Size = new Size(115, 22);
            airportText.TabIndex = 27;
            airportText.Text = "Аэропорт";
            airportText.Click += airportText_Click;
            // 
            // buttonSave
            // 
            buttonSave.Cursor = Cursors.Hand;
            buttonSave.Location = new Point(10, 360);
            buttonSave.Margin = new Padding(2);
            buttonSave.Name = "buttonSave";
            buttonSave.Size = new Size(108, 27);
            buttonSave.TabIndex = 21;
            buttonSave.Text = "Сохранить данные";
            buttonSave.UseVisualStyleBackColor = true;
            buttonSave.Click += buttonSave_Click;
            // 
            // buttonClear
            // 
            buttonClear.Cursor = Cursors.Hand;
            buttonClear.Location = new Point(133, 360);
            buttonClear.Margin = new Padding(2);
            buttonClear.Name = "buttonClear";
            buttonClear.Size = new Size(108, 27);
            buttonClear.TabIndex = 22;
            buttonClear.Text = "Очистить";
            buttonClear.UseVisualStyleBackColor = true;
            buttonClear.Click += buttonClear_Click;
            // 
            // FillWithInf
            // 
            FillWithInf.BorderStyle = BorderStyle.FixedSingle;
            FillWithInf.Cursor = Cursors.No;
            FillWithInf.Location = new Point(399, 40);
            FillWithInf.Margin = new Padding(2);
            FillWithInf.Multiline = true;
            FillWithInf.Name = "FillWithInf";
            FillWithInf.ReadOnly = true;
            FillWithInf.ScrollBars = ScrollBars.Both;
            FillWithInf.Size = new Size(477, 304);
            FillWithInf.TabIndex = 20;
            FillWithInf.Enter += FillWithInf_Enter;
            // 
            // filling
            // 
            filling.Location = new Point(399, 12);
            filling.Margin = new Padding(2, 0, 2, 0);
            filling.Name = "filling";
            filling.Size = new Size(92, 22);
            filling.TabIndex = 23;
            filling.Text = "Заполнение:";
            // 
            // barFilling
            // 
            barFilling.Location = new Point(496, 10);
            barFilling.Margin = new Padding(2);
            barFilling.Name = "barFilling";
            barFilling.Size = new Size(380, 25);
            barFilling.TabIndex = 8;
            // 
            // Airport
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(920, 413);
            Controls.Add(airportText);
            Controls.Add(comboBoxModel);
            Controls.Add(deserialize);
            Controls.Add(serialize);
            Controls.Add(filling);
            Controls.Add(buttonClear);
            Controls.Add(buttonSave);
            Controls.Add(FillWithInf);
            Controls.Add(chooseButton);
            Controls.Add(TypeOfPlane);
            Controls.Add(textBoxCountOfSeat);
            Controls.Add(dateOfIssueChoose);
            Controls.Add(ConfirmTheCorrect);
            Controls.Add(dateOfServiceChoose);
            Controls.Add(textBoxCarrying);
            Controls.Add(listBoxType);
            Controls.Add(barFilling);
            Controls.Add(DateOfService);
            Controls.Add(labelCarrying);
            Controls.Add(yearOfIssue);
            Controls.Add(CountOfSeating);
            Controls.Add(crew);
            Controls.Add(Model);
            Controls.Add(ID);
            Controls.Add(textBoxID);
            Margin = new Padding(2);
            Name = "Airport";
            Text = "Аэропорт";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox textBoxID;
        private Label ID;
        private Label Model;
        private Label crew;
        private Label CountOfSeating;
        private Label yearOfIssue;
        private Label labelCarrying;
        private Label DateOfService;
        private ListBox listBoxType;
        private TextBox textBoxCarrying;
        private DateTimePicker dateOfServiceChoose;
        private CheckBox ConfirmTheCorrect;
        private DateTimePicker dateOfIssueChoose;
        private TextBox textBoxCountOfSeat;
        private Label TypeOfPlane;
        private Button chooseButton;
        private Button serialize;
        private Button deserialize;
        private ComboBox comboBoxModel;
        private Label airportText;
        private Button buttonSave;
        private Button buttonClear;
        private TextBox FillWithInf;
        private Label filling;
        private ProgressBar barFilling;
    }
}