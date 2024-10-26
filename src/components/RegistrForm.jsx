import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../services/mutation";
import Logo from '../assets/images/Union.png';

const RegistrForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { mutate } = useRegister();

    const onSubmit = (data) => {
        const { username, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        mutate(
            { username, password },
            {
                onSuccess: (data) => {
                    console.log(data.data.message);
                    navigate("/login");
                },
                onError: (error) => console.log(error.response.data.message),
            }
        );
    };

    return (
        <form
            className='max-w-96 bg-white space-y-16 px-7 py-14 rounded-custom'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex flex-col justify-center items-center gap-y-4'>
                <img src={Logo} className='size-16' alt="logo" />
                <p className='headline-medium text-matn'>فرم ثبت نام</p>
            </div>

            <div className='text-matn/50 body-normal space-y-4'>
                <input
                    type="text"
                    placeholder="نام کاربری"
                    className="input input-bordered text-right bg-inputBg w-full"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.username && <p className="error-message">{errors.username.message}</p>}

                <input
                    type="password"
                    placeholder="رمز عبور"
                    className="input input-bordered text-right bg-inputBg w-full"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="input input-bordered text-right bg-inputBg w-full"
                    {...register("confirmPassword", { required: "Please confirm your password" })}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

                <button className="btn w-full bg-btnCreate" type='submit'>
                    <p className='title-large text-white'>
                        ثبت نام
                    </p>
                </button>

                <Link to={'/login'} className='flex justify-start'>
                    <p className='text-btnCreate body-normal'>حساب کاربری دارید؟</p>
                </Link>
            </div>
        </form>
    );
};

export default RegistrForm;
