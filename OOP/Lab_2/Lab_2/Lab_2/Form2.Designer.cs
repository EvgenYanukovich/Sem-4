namespace Lab_2
{
    partial class crewMem
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            crew = new Label();
            nameText = new Label();
            workExText = new Label();
            ageText = new Label();
            PositionText = new Label();
            expInput = new TextBox();
            nameInput = new TextBox();
            ageInp = new TextBox();
            comboBoxConditionlInput = new ComboBox();
            AddButton = new Button();
            SuspendLayout();
            // 
            // crew
            // 
            crew.AutoSize = true;
            crew.Font = new Font("Magneto", 12F, FontStyle.Bold, GraphicsUnit.Point);
            crew.Location = new Point(10, 7);
            crew.Margin = new Padding(2, 0, 2, 0);
            crew.Name = "crew";
            crew.Size = new Size(173, 25);
            crew.TabIndex = 0;
            crew.Text = "Члены экипажа";
            // 
            // nameText
            // 
            nameText.Location = new Point(10, 80);
            nameText.Margin = new Padding(2, 0, 2, 0);
            nameText.Name = "nameText";
            nameText.Size = new Size(70, 22);
            nameText.TabIndex = 2;
            nameText.Text = "Имя:";
            // 
            // workExText
            // 
            workExText.Location = new Point(10, 123);
            workExText.Margin = new Padding(2, 0, 2, 0);
            workExText.Name = "workExText";
            workExText.Size = new Size(70, 22);
            workExText.TabIndex = 4;
            workExText.Text = "Стаж:";
            // 
            // ageText
            // 
            ageText.Location = new Point(10, 169);
            ageText.Margin = new Padding(2, 0, 2, 0);
            ageText.Name = "ageText";
            ageText.Size = new Size(70, 22);
            ageText.TabIndex = 5;
            ageText.Text = "Возраст:";
            // 
            // PositionText
            // 
            PositionText.Location = new Point(10, 42);
            PositionText.Margin = new Padding(2, 0, 2, 0);
            PositionText.Name = "PositionText";
            PositionText.Size = new Size(100, 22);
            PositionText.TabIndex = 6;
            PositionText.Text = "Должность:";
            // 
            // expInput
            // 
            expInput.Location = new Point(102, 123);
            expInput.Margin = new Padding(2, 2, 2, 2);
            expInput.Name = "expInput";
            expInput.Size = new Size(75, 27);
            expInput.TabIndex = 7;
            expInput.TextChanged += expInput_TextChanged;
            expInput.Leave += expInput_Leave;
            // 
            // nameInput
            // 
            nameInput.Location = new Point(102, 80);
            nameInput.Margin = new Padding(2, 2, 2, 2);
            nameInput.Name = "nameInput";
            nameInput.Size = new Size(124, 27);
            nameInput.TabIndex = 8;
            nameInput.Leave += nameInput_Leave;
            // 
            // ageInp
            // 
            ageInp.Location = new Point(102, 169);
            ageInp.Margin = new Padding(2, 2, 2, 2);
            ageInp.Name = "ageInp";
            ageInp.Size = new Size(75, 27);
            ageInp.TabIndex = 9;
            ageInp.TextChanged += ageInp_TextChanged;
            ageInp.Leave += ageInp_Leave;
            // 
            // comboBoxConditionlInput
            // 
            comboBoxConditionlInput.FormattingEnabled = true;
            comboBoxConditionlInput.Items.AddRange(new object[] { "Пилот", "Стюардеса ", "Механик" });
            comboBoxConditionlInput.Location = new Point(102, 39);
            comboBoxConditionlInput.Margin = new Padding(2, 2, 2, 2);
            comboBoxConditionlInput.Name = "comboBoxConditionlInput";
            comboBoxConditionlInput.Size = new Size(135, 28);
            comboBoxConditionlInput.TabIndex = 27;
            comboBoxConditionlInput.Leave += comboBoxConditionlInput_Leave;
            // 
            // AddButton
            // 
            AddButton.Location = new Point(10, 217);
            AddButton.Margin = new Padding(2, 2, 2, 2);
            AddButton.Name = "AddButton";
            AddButton.Size = new Size(90, 27);
            AddButton.TabIndex = 28;
            AddButton.Text = "Добавить";
            AddButton.UseVisualStyleBackColor = true;
            AddButton.Click += AddButton_Click;
            // 
            // crewMem
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(270, 258);
            Controls.Add(AddButton);
            Controls.Add(comboBoxConditionlInput);
            Controls.Add(ageInp);
            Controls.Add(nameInput);
            Controls.Add(expInput);
            Controls.Add(PositionText);
            Controls.Add(ageText);
            Controls.Add(workExText);
            Controls.Add(nameText);
            Controls.Add(crew);
            Margin = new Padding(2, 2, 2, 2);
            Name = "crewMem";
            Text = "Члены экипажа";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label crew;
        private Label nameText;
        private Label workExText;
        private Label ageText;
        private Label PositionText;
        private TextBox expInput;
        private TextBox nameInput;
        private TextBox ageInp;
        private ComboBox comboBoxConditionlInput;
        private Button AddButton;
    }
}