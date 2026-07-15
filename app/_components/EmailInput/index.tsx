import styles from "./email-input.module.css";

export interface EmailInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}

export default function EmailInput({
  id = "email",
  name = "email",
  value,
  onChange,
  label = "Email",
  placeholder = "you@example.com",
  error,
  required,
  autoComplete = "email",
}: EmailInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="email"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
